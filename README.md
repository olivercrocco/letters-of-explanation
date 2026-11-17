# Letters of Explanation

A free tool for formerly incarcerated individuals to write a letter about their record: to a landlord or housing authority, to an employer after a background check, or to a licensing board. It also writes a request for a reference letter. It runs entirely in the browser: no account, no server, and nothing typed into it is sent anywhere or stored unless the person chooses to save it.

Try it at https://olivercrocco.com/letters-of-explanation/, or download `letters-of-explanation.html` and open it in any browser. The single file works without the internet, so it can be shared on a USB drive or used on a laptop in a classroom.

It was built for an employment skills course in a Louisiana reentry bridge program for people in their first year after release, and is part of the [Reentry Toolkit](https://olivercrocco.com/reentry/), with the [Reentry Resume Builder](https://github.com/olivercrocco/reentry-resume-builder), [Interview Practice](https://github.com/olivercrocco/interview-practice), and [First Paycheck](https://github.com/olivercrocco/first-paycheck). Nothing in it is specific to Louisiana.

## What it does

- Asks once for the facts every letter uses: contact details, a plain description of the record and its year, when the person came home, what they did with the time (starting sentences to tap and edit), their current job and income, who supports them, and, only if the person checks it, that they are meeting all the requirements of their supervision.
- Asks for the details of the chosen letter: the property and rent; the company, position, and an optional sentence on how the job relates to the record; the board, license, training, and exam; or, for a reference request, who is being asked, how they know the person, what for, and by when.
- Drafts the letter for the person to edit. Each explanation letter names the record plainly, takes responsibility in one sentence, spends most of its length on what the person has done since and where they are now, and ends by asking to be considered as they are today, with an offer of documents and references.
- Flags any blank left to fill and letters that run long, lists the documents to send with each letter, and downloads a Word file (Times New Roman 12, no extra spacing), prints, or copies the text.
- Can start from a file saved by the Reentry Resume Builder, which fills in contact details and a list of accomplishments.
- Includes a "Try it with an example" button with a made-up person, and reads each step aloud on request.

## What it leaves out

- It gives no legal advice about what landlords, employers, or licensing boards may consider or must do. Programs using it should add their own guidance where they work.
- It does not write personal statements for pardon, parole, or expungement hearings. Those are legal documents and are best written with a lawyer or legal aid office.
- No AI. The letters are built from the person's own answers and edited by them.

## Files

- `letters-of-explanation.html`: the whole tool in one file. This is the source of truth.
- `build-web.mjs`: builds `web/`, a version for sites whose Content-Security-Policy blocks inline scripts. Run `node build-web.mjs` after editing the single file.
- `web/`: the built web version (`index.html`, `core.js`, `ui.js`, and a copy of the single file for download).

## Adapting it

The starting sentences (`GROWTH_STARTERS`), the letter types (`TYPES`), the document lists (`DOCS`), and the letter wording (`draft`) sit in the first script of `letters-of-explanation.html`. The Word-file code is shared with the Reentry Resume Builder.

## License

MIT. See `LICENSE`.

Built for formerly incarcerated individuals and the programs that support them, by Oliver S. Crocco, Louisiana State University.
