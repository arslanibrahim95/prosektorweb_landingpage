from playwright.sync_api import sync_playwright

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        try:
            print("Navigating to home page...")
            page.goto("http://localhost:5173")
            page.wait_for_load_state("networkidle")

            print("Checking main sections...")
            # Verify Features section heading is visible
            # Use specific locator for heading
            features_heading = page.locator("h2", has_text="Neden Biz?")
            features_heading.scroll_into_view_if_needed()
            features_heading.wait_for(state="visible")
            print("Features section confirmed.")

            # Verify Process section heading
            process_heading = page.locator("h2", has_text="Nasıl Çalışırız?")
            process_heading.scroll_into_view_if_needed()
            process_heading.wait_for(state="visible")
            print("Process section confirmed.")

            print("Testing modal interaction...")
            # Click "Web Sitemi İncele" button in Hero
            # Hero has a button with text "Web Sitemi İncele"
            hero_btn = page.locator("button:has-text('Web Sitemi İncele')").first
            hero_btn.scroll_into_view_if_needed()
            hero_btn.click()

            # Wait for Info Modal content
            page.wait_for_selector("text=Kodum Var, Giriş Yap", state="visible")
            print("Info modal opened successfully.")

            # Take screenshot of modal
            page.screenshot(path="verification_modal.png")

            # Close modal (click X button)
            close_btn = page.locator("button[aria-label='Kapat']")
            close_btn.click()

            # Wait for modal to disappear
            # We can check that the modal container is gone or hidden
            page.locator("text=Kodum Var, Giriş Yap").wait_for(state="hidden")
            print("Modal closed successfully.")

            # Test Contact Section interaction
            print("Testing Contact Section...")
            contact_heading = page.locator("h2", has_text="Bize Ulaşın")
            contact_heading.scroll_into_view_if_needed()
            contact_heading.wait_for(state="visible")

            # Take final screenshot
            page.screenshot(path="verification_contact.png")
            print("Verification complete.")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification_error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_app()
