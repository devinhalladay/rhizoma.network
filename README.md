# Posting
## Terminology
- **Folder**: The highest-order unit of content on the website. Folders are what you see on the homepage and other index pages, and they contain **Sheets** or **Posts**. In terms of file structure, a Folder is a literal folder in `/content/` containing `_index.md` and `n.md` (where n is an integer beginning at 1).
- **Sheet/Post**: The second-order unit of content on the website, Sheets are individual Posts that comprise a Folder. In terms of file structure, a Sheet is an individual Markdown (`.md`) file contained inside a Folder and named `n.md` (where n is an integer beginning at 1).
- **Item/Object**: An evocative object used to spur conversation.

## How to add a Folder
- Open Terminal and run `hugo new --kind folder foldername`. `foldername` should be an alphanumeric string and can contain hyphens; it will make up the URL for the folder once the site builds.
- Open your new Folder and open its `_index.md`.
  - Adjust the title attribute — this is the title of the entire Folder.
  - Add topics to the topics list to describe the content that will be posted in the Folder.
- Open your new Folder's first Sheet, `1.md`. Add your author shortname to the author attribute (i.e. `devin` or `tanvi`).
- Add your Sheet's Item inside the approriate markup (`.sheet__item`). Use `<img>`, `<blockquote>`, or `<iframe>`.
- Add your Sheet content inside the appropriate markup (`.sheet__response`). Since Markdown doesn't parse Markdown inside of HTML tags, we'll need to write all our own HTML tags. Make sure paragraphs go inside paragraph tags, etc.
- Push to github.

## How to post inside of a Folder
- In Finder or your text editor's file tree, find the Folder you'd like to add a Sheet to inside of `content/`. Take note of the directory name, i.e. `rhizome`.
- Open it up and take note of the latest post's number. It might be `1.md` or `5.md` or `n.md`, etc.
- In Terminal, run `hugo new --kind sheet [foldername]/[sheetnumber].md`, where `[foldername]` is the name of the directory/Folder you'd like to add to, and `[sheetnumber]` is the number of the sheet you are adding. I.e. `hugo new --kind sheet rhizome/2.md`
- Add your Sheet's Item and Content
- Push to GitHub

# Possible Names
- The Revisionist
- Meta Meta
- Infra-something???
- Metastructure
- Post-Content

# Inspiration
- [Snark Market](http://snarkmarket.com/)
- [Ribbon Farm](https://www.ribbonfarm.com/)
- [The Mavenist](https://web.archive.org/web/20180809163449/http://themavenist.org/)
- [Blog Archive](https://v6.robweychert.com/blog/)

# Rules/Mechanics
## Final
- Could be text, images, video, audio
- Underlying format is always call-response
- Tagging system (multiple tags)
- Search (by author, tags, content)
- Have the sequence be chronological
- Could post about:
  - Poems
  - Philosophy things
  - Books
  - General culture things (brands, designs, objects)
  - Reviews (of cultural things)
  - Mixes?
  - Diagrams
  - Maps lol
- Some things we created, some things we find in the world
- No overly intellectual language without explaining it
- Needs to be oriented toward consumption, not jacking off
- Footnotes/external sources?
- Editing posts after the fact is forbidden
- Pseudonyms
- We need some structure (no excuses) (maybe we need a reward and punishment system)
  - Posting timeline: Post a new thread every two weeks, but post a reply every week
  - Replies should be limited in length? Don't do that thing where your replies are 6 hours of reading.
  - Anything that goes over a 5-minute read should be forked into its own thread and punished by death.
- Must be accessible
- Come up with a clever way to share posts elsewhere (like twitter and instagram)

## Potential
- Flowchart/diagramattic vizualization of each conversation?
- Threaded replies (maybe with character limit)
- "Wha?"
- Mixup Mode?
- **Mediating post -> how do we go from one post to another? A traversal! Then it becomes a web of posts where everything is connected.**
- Clippings? Collections? (PDF mode?)

# Next Steps
- [ ] Whiteboard layout options
- [ ] Finalize feature set
- [ ] Figure out the best way to build it
- [ ] Start designing
- [ ] Start coding
