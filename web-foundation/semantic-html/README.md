# Semantic HTML

Semantic HTML means using HTML tags that clearly describe the
meaning and purpose of the content.

## Common Semantic Tags

### 1. `<header>`
- Introductory or top content of a page/section.
- Usually contains heading, logo, or navigation.

### 2. `<nav>`
- Contains important navigation links.
- Example: Home, About, Projects, Contact.

### 3. `<main>`
- Contains the primary/main content of the webpage.
- Usually one `<main>` per page.

### 4. `<section>`
- Groups related content logically.
- Usually has a heading.

### 5. `<article>`
- Represents independent, self-contained content.
- Examples: Blog post, news article, product review.

### 6. `<aside>`
- Contains related but secondary content.
- Examples: Related links, sidebar, additional information.

### 7. `<footer>`
- Contains ending/supporting information.
- Examples: Copyright, contact links, social links.

---

## Basic Structure

<body>

    <header>
        <nav>
            <!-- Navigation links -->
        </nav>
    </header>

    <main>
        <section>
            <article>
                <!-- Independent content -->
            </article>
        </section>

        <aside>
            <!-- Secondary content -->
        </aside>
    </main>

    <footer>
        <!-- Footer information -->
    </footer>

</body>

---

## Quick Revision

| Tag | Purpose |
|-----|---------|
| `<header>` | Introductory/top content |
| `<nav>` | Navigation links |
| `<main>` | Primary content |
| `<section>` | Related/grouped content |
| `<article>` | Self-contained content |
| `<aside>` | Related/secondary content |
| `<footer>` | Ending/supporting information |

## Semantic vs `<div>`

`<div>` → Generic container with no specific meaning.

Semantic tags → Give meaning and structure to the content.

Example:

    <div>My Projects</div>

Better:

    <section>
        <h2>My Projects</h2>
    </section>

# Memory trick:
Header -> Nav -> Main -> Section/Article/Aside -> Footer