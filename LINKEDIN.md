# LinkedIn kit

Live site: **https://batta0102.github.io/portfolio/** (French) · **https://batta0102.github.io/portfolio/en/** (English)

---

## 1. Featured section

Profile → **Add profile section** → **Recommended** → **Add featured** → **+** → **Add a link**

| Field       | Value |
| ----------- | ----- |
| URL         | `https://batta0102.github.io/portfolio/` |
| Title       | Portfolio — Baya Khouini · Software Engineer, Full Stack & AI |
| Description | LLM systems (multi-agent, RAG) and full-stack apps shipped to production. Open to a 6-month PFE from December 2026. |

LinkedIn fills the title and image from the page automatically. Paste the title and description above if you want to override them.

---

## 2. Post

### Français

> J'ai enfin mis mon portfolio en ligne 🙂
> En dernière année à ESPRIT, je cherche un stage PFE de 6 mois à partir de décembre 2026, en France ou ailleurs en Europe.
> Ces derniers mois : des systèmes LLM (multi-agents, RAG) et des applis full stack mises en production.
> Tout est ici 👉 https://batta0102.github.io/portfolio/
> Si votre équipe recrute, ou si vous connaissez quelqu'un, un message ou un partage m'aiderait beaucoup 🙏 #PFE #stage #IA

### English

> I finally put my portfolio online 🙂
> Final year at ESPRIT, and I'm looking for a 6-month end-of-studies internship (PFE) from December 2026, in France or anywhere in Europe.
> Lately: LLM systems (multi-agent, RAG) and full-stack apps running in production.
> It's all here 👉 https://batta0102.github.io/portfolio/en/
> If your team is hiring, or you know one that is, a message or a share would mean a lot 🙏 #internship #AI #softwareengineering

Tip: post the link in the text (as above). LinkedIn turns it into a preview card with the Open Graph image. You can delete the URL from the text once the card appears; the card stays.

---

## 3. Headline

```
Software Engineering Student @ ESPRIT · Full Stack & AI · Looking for a 6-month PFE (Dec 2026)
```

(94 characters, under LinkedIn's 220-character limit.)

---

## 4. Check the link preview (Post Inspector)

1. Open **https://www.linkedin.com/post-inspector/** while signed in.
2. Paste `https://batta0102.github.io/portfolio/` and click **Inspect**.
3. Check that the preview shows:
   - **Image:** dark card with "Baya Khouini" and "Software Engineer · Full Stack & AI" (1200 × 627)
   - **Title:** Baya Khouini — Software Engineer · Full Stack & AI
   - **Description:** the French summary (or English one for `/en/`)
4. Repeat with `https://batta0102.github.io/portfolio/en/` if you use the English post.
5. If something looks old or wrong after you change the site: wait for the GitHub Actions deploy to finish, then click **Inspect** again. Each inspection makes LinkedIn re-fetch the page and refreshes its cache for future posts.
6. Always share the exact same URL you inspected (with the trailing `/`). LinkedIn caches each URL variant separately.
