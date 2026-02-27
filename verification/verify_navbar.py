
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Navigate to the frontend
        try:
            await page.goto("http://localhost:5173", timeout=60000)
            print("Navigated to localhost:5173")

            # Wait for content to load
            await page.wait_for_selector('nav')

            # Initial state screenshot
            await page.screenshot(path="verification/before_scroll.png")
            print("Took initial screenshot")

            # Scroll down to trigger the scroll handler
            await page.evaluate("window.scrollTo(0, 500)")

            # Wait a bit for the throttled event to fire and state to update
            await page.wait_for_timeout(500)

            # Screenshot after scroll
            await page.screenshot(path="verification/after_scroll.png")
            print("Took screenshot after scroll")

            # Check if navbar has scrolled class/style (visual check via screenshot mostly, but can log class)
            navbar_classes = await page.eval_on_selector('nav', 'el => el.className')
            print(f"Navbar classes after scroll: {navbar_classes}")

            # Scroll further to different sections to check active state logic
            sections = ['features', 'process', 'pricing', 'faq', 'contact']
            for section in sections:
                element = await page.query_selector(f'#{section}')
                if element:
                    await page.evaluate(f"document.getElementById('{section}').scrollIntoView()")
                    await page.wait_for_timeout(200) # Wait for throttle
                    print(f"Scrolled to {section}")

            await page.screenshot(path="verification/final_state.png")
            print("Took final screenshot")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
