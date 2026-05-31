from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:5173")
    page.wait_for_timeout(1000)

    # Accept cookie banner if present
    try:
        page.get_by_role("button", name="Tamam, Anlaşıldı").click(timeout=1000)
    except Exception:
        pass
    page.wait_for_timeout(500)

    # Click Web Sitemi Gör (opens LeadFormScreen or InfoScreen)
    page.get_by_role("button", name="Web Sitemi Gör").click()
    page.wait_for_timeout(1000)

    # Click Önizleme Talebi Bırak (opens LeadFormScreen)
    page.get_by_role("button", name="Önizleme Talebi Bırak").click()
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
