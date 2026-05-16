import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Goto the local dev server
        await page.goto("http://localhost:5173")

        # Wait for the preview button
        await page.wait_for_selector('text="Web Sitemi Gör"')
        await page.click('text="Web Sitemi Gör"')

        # We are on the welcome screen
        await page.wait_for_selector('text="Kodunuz yok mu?"')

        # Click the "Önizleme Talebi Bırak" button
        await page.click('button:has-text("Önizleme Talebi Bırak")')

        # We need to wait for it, maybe it's not visible? Let's use evaluate to click it
        # Actually, let's just grab the Lead Form state using evaluate
        await page.evaluate("""() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const btn = btns.find(b => b.textContent.includes('Önizleme Talebi Bırak'));
            if(btn) btn.click();
        }""")

        await page.wait_for_timeout(2000)
        await page.screenshot(path="lead_form_verified.png")
        print("Lead form screenshot taken.")

        await page.evaluate("""() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const btn = btns.find(b => b.textContent.includes('Önizleme Talebi Bırak') || b.textContent.includes('Gönder'));
            if(btn) btn.click();
        }""")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="lead_form_validation_verified.png")
        print("Lead form validation screenshot taken.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
