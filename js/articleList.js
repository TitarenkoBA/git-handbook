var articleList = [{
            id: "chapter_1",
            title: "What’s a version control system?",
            subtitle: ["What’s a version control system?"],
            images: ["img/git.jpg"],
            text: [
                `A version control system, or VCS, tracks the history of changes as people and teams collaborate on projects together. As the project evolves, teams can run tests, fix bugs, and contribute new code with the confidence that any version can be recovered at any time. Developers can review project history to find out:
                <ul>
                    <li>Which changes were made?</li>
                    <li>Who made the changes?</li>
                    <li>When were the changes made?</li>
                    <li>Why were changes needed?</li>
                </ul>`
            ]
        }, {
            id: "chapter_2",
            title: "What’s a distributed version control system?",
            subtitle: ["What’s a distributed version control system?"],
            images: ["img/git-01.png"],
            text: [
                `Git is an example of a distributed version control system (DVCS) commonly used for open source and commercial software development. DVCSs allow full access to every file, branch, and iteration of a project, and allows every user access to a full and self-contained history of all changes. Unlike once popular centralized version control systems, DVCSs like Git don’t need a constant connection to a central repository. Developers can work anywhere and collaborate asynchronously from any time zone.
                <br><br>
                Without version control, team members are subject to redundant tasks, slower timelines, and multiple copies of a single project. To eliminate unnecessary work, Git and other VCSs give each contributor a unified and consistent view of a project, surfacing work that’s already in progress. Seeing a transparent history of changes, who made them, and how they contribute to the development of a project helps team members stay aligned while working independently.`
            ]
        }, {
            id: "chapter_3",
            title: "Why Git?",
            subtitle: ["Why Git?"],
            images: ["img/basics.jpg"],
            text: [
                `According to the latest <a class="link_button" href="https://insights.stackoverflow.com/survey/2017#technology">Stack Overflow developer survey</a>,
                 more than 70 percent of developers use Git, making it the most-used VCS in the world. Git is commonly used for both open source and commercial software development, <b>with significant benefits</b> for individuals, teams and businesses.
                <ul>
                    <li>Git lets developers see the entire timeline of their changes, decisions, and progression of any project in one place. From the moment they access the history of a project, the developer has all the context they need to understand it and start contributing.</li>
                    <li>Developers work in every time zone. With a DVCS like Git, collaboration can happen any time while maintaining source code integrity. Using branches, developers can safely propose changes to production code.</li>
                    <li>Businesses using Git can break down communication barriers between teams and keep them focused on doing their best work. Plus, Git makes it possible to align experts across a business to collaborate on major projects.</li>
                </ul>`
            ]
        }, {
            id: "chapter_4",
            title: "What’s a repository?",
            subtitle: ["What’s a repository?"],
            images: ["img/branches_.jpg"],
            text: [
                `A <b>repository</b>, or <a class="link_button" href="https://git-scm.com/">Git project</a>, encompasses the entire collection of files and folders associated with a project, along with each file’s revision history. The file history appears as snapshots in time called <b>commits</b>, and the commits exist as a linked-list relationship, and can be organized into multiple lines of development called <b>branches</b>. Because Git is a DVCS, repositories are self-contained units and anyone who owns a copy of the repository can access the entire codebase and its history. Using the command line or other ease-of-use interfaces, a git repository also allows for: interaction with the history, cloning, creating branches, committing, merging, comparing changes across versions of code, and more.
                <br><br>
                Working in repositories keeps development projects organized and protected. Developers are encouraged to fix bugs, or create fresh features, without fear of derailing mainline development efforts. Git facilitates this through the use of topic branches: lightweight pointers to commits in history that can be easily created and deprecated when no longer needed.
                <br><br>
                Through platforms like GitHub, Git also provides more opportunities for project transparency and collaboration. Public repositories help teams work together to build the best possible final product.`
            ]
        }, {
            id: "chapter_5",
            title: "Basic Git commands",
            subtitle: ["Basic Git commands"],
            images: ["img/advanced.png"],
            text: [
                `To use Git, developers use specific commands to copy, create, change, and combine code. These commands can be executed directly from the command line or by using an application like <a class="link_button" href="https://desktop.github.com/">GitHub Desktop</a> or Git Kraken. Here are some common commands for using Git:
                <ul>
                    <li><b>git init</b> initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.</li>
                    <li><b>git clone</b> creates a local copy of a project that already exists remotely. The clone includes all the project’s files, history, and branches.</li>
                    <li><b>git add</b> stages a change. Git tracks changes to a developer’s codebase, but it’s necessary to stage and take a snapshot of the changes to include them in the project’s history. This command performs staging, the first part of that two-step process. Any changes that are staged will become a part of the next snapshot and a part of the project’s history. Staging and committing separately gives developers complete control over the history of their project without changing how they code and work.</li>
                    <li><b>git commit</b> saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo. Anything that’s been staged with git add will become a part of the snapshot with git commit.</li>
                    <li><b>git status</b> shows the status of changes as untracked, modified, or staged.</li>
                    <li><b>git branch</b> shows the branches being worked on locally.</li>
                    <li><b>git merge</b> merges lines of development together. This command is typically used to combine changes made on two distinct branches. For example, a developer would merge when they want to combine changes from a feature branch into the master branch for deployment.</li>
                    <li><b>git pull</b> updates the local line of development with updates from its remote counterpart. Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment.</li>
                    <li><b>git push</b> updates the remote repository with any commits made locally to a branch.</li>
                </ul>
                <br>
                Learn more from <a class="link_button" href="https://git-scm.com/docs">a full reference guide to Git commands</a>.`
            ]
        }, {
            id: "chapter_6",
            title: "Explore more Git commands",
            subtitle: ["Explore more Git commands"],
            images: ["img/ITH_Managing-Code-in-GIT.png"],
            text: [
                `For a detailed look at Git practices, the videos below show how to get the most out of some Git commands.<br>
            <ul>
                <li> <a class="link_button" href="https://www.youtube.com/watch?v=rBbbOouhI-s&index=2&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4"> Working locally </a> </li>
                <li> <a class="link_button" href="https://www.youtube.com/watch?v=SxmveNrZb5k&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=3">git status</a> </li>
                <li> <a class="link_button" href="https://www.youtube.com/watch?v=Vb0Ghkkc2hk&index=4&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4">Two-step commits </a> </li>
                <li> <a class="link_button" href="https://www.youtube.com/watch?v=-uQHV9GOA0w&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4">git pull</a> and <a class="link_button" href="https://www.youtube.com/watch?v=-uQHV9GOA0w&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4">git push</a> </li>
            </ul>`
            ]
        }, {
            id: "chapter_7",
            title: "How GitHub fits in",
            subtitle: ["How GitHub fits in"],
            images: ["img/Screen Shot 2018-07-08 at 17.11.26.png"],
            text: [
                `GitHub is a Git hosting repository that provides developers with tools to ship better code through command line features, issues (threaded discussions), pull requests, code review, or the use of a collection of free and for-purchase apps in the GitHub Marketplace. With collaboration layers like the GitHub flow, a community of 15 million developers, and an ecosystem with hundreds of integrations, GitHub changes the way software is built.`
            ]
        }, {
            id: "chapter_8",
            title: "How GitHub works",
            subtitle: ["How GitHub works"],
            images: ["img/maxresdefault.jpg"],
            text: [
                `GitHub builds collaboration directly into the development process. Work is organized into repositories, where developers can outline requirements or direction and set expectations for team members. Then, using the GitHub flow, developers simply create a branch to work on updates, commit changes to save them, open a pull request to propose and discuss changes, and merge pull requests once everyone is on the same page.`
                ]
        }, {
            id: "chapter_9",
            title: "The GitHub flow",
            subtitle: ["The GitHub flow"],
            images: ["img/400x150.png"],
            text: [
                `The GitHub flow is a lightweight, branch-based workflow built around core Git commands used by teams around the globe—including ours.
                <br><br>
                The GitHub flow has six steps, each with distinct benefits when implemented:
                <ol>
                    <li><b>Create a branch</b>: Topic branches created from the canonical deployment branch (usually <b>master</b>) allow teams to contribute to many parallel efforts. Short-lived topic branches, in particular, keep teams focused and results in quick ships.</li>
                    <li><b>Add commits</b>: Snapshots of development efforts within a branch create safe, revertible points in the project’s history.</li>
                    <li><b>Open a pull request</b>: Pull requests publicize a project’s ongoing efforts and set the tone for a transparent development process.</li>
                    <li><b>Discuss and review code</b>: Teams participate in code reviews by commenting, testing, and reviewing open pull requests. Code review is at the core of an open and participatory culture.</li>
                    <li><b>Merge</b>: Upon clicking merge, GitHub automatically performs the equivalent of a local ‘git merge’ operation. GitHub also keeps the entire branch development history on the merged pull request.</li>
                    <li><b>Deploy</b>: Teams can choose the best release cycles or incorporate continuous integration tools and operate with the assurance that code on the deployment branch has gone through a robust workflow.</li>
                </ol>`
                ]
        }, {
            id: "chapter_10",
            title: "Learn more about the GitHub flow",
            subtitle: ["Learn more about the GitHub flow"],
            images: ["img/400x150.png"],
            text: [
                `Developers can find more information about the GitHub flow in the resources provided below.
                <ul>
                    <li><a class="link_button" href="https://guides.github.com/introduction/flow/">Interactive guide</a></li>
                    <li><a class="link_button" href="https://www.youtube.com/watch?v=47E-jcuQz5c&index=1&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4">GitHub Flow video</a></li>
                </ul>`
                ]
        }, {
            id: "chapter_11",
            title: "GitHub and the command line",
            subtitle: ["","Example: Contribute to an existing repository","Example: Start a new repository and publish it to GitHub","Example: contribute to an existing branch on GitHub"],
            images: ["img/400x150.png","","",""],
            text: [
                `For developers new to the command line, the GitHub Training team has put together a series of <a class="link_button" href="https://help.github.com/articles/git-and-github-learning-resources/">tutorials</a> on Git commands to guide the way. Sometimes, a series of commands can paint a picture of how to use Git:`,
                `# download a repository on GitHub.com to our machine <br>
                    <i>git clone https://github.com/me/repo.git</i><br>
                    <br>
                    # change into the 'repo' directory <br>
                    <i>cd repo</i><br>
                    <br>
                    # create a new branch to store any new changes <br>
                    <i>git branch my-branch</i><br>
                    <br>
                    # switch to that branch (line of development) <br>
                    <i>git checkout my-branch</i><br>
                    <br>
                    # make changes, for example, edit 'file1.md' and 'file2.md' using the text editor <br>
                    <br>
                    # stage the changed files <br>
                    <i>git add file1.md file2.md</i><br>
                    <br>
                    # take a snapshot of the staging area (anything that's been added) <br>
                    <i>git commit -m "my snapshot"</i><br>
                    <br>
                    # push changes to github <br>
                    <i>git push --set-upstream origin my-branch</i>`,
                `First, you will need to create a new repository on GitHub. You can learn how to create a new repository in our <a class="link_button" href="https://guides.github.com/activities/hello-world/#repository">Hello World guide</a>. <b>Do not</b> initialize the repository with a README, .gitignore or License. This empty repository will await your code.
                    <br><br>
                    # create a new directory, and initialize it with git-specific functions <br>
                    <i>git init my-repo</i><br>
                    <br>
                    # change into the 'my-repo' directory <br>
                    <i>cd my-repo</i><br>
                    <br>
                    # create the first file in the project <br>
                    <i>touch README.md</i><br>
                    <br>
                    # git isn't aware of the file, stage it <br>
                    <i>git add README.md</i><br>
                    <br>
                    # take a snapshot of the staging area <br>
                    <i>git commit -m "add README to initial commit"</i><br>
                    <br>
                    # provide the path for the repository you created on github <br>
                    <i>git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git</i><br>
                    <br>
                    # push changes to github <br>
                    <i>git push --set-upstream origin master</i>`,
                `# assumption: a project called 'repo' already exists on the machine, and a new branch has been pushed to GitHub.com since the last time changes were made locally <br>
                    <br>
                    # change into the 'repo' directory <br>
                    <i>cd repo </i> <br>
                    <br>
                    # update all remote tracking branches, and the currently checked out branch <br>
                    <i>git pull </i> <br>
                    <br>
                    # change into the existing branch called 'feature-a' <br>
                    <i>git checkout feature-a </i> <br>
                    <br>
                    # make changes, for example, edit 'file1.md' using the text editor <br>
                    <br>
                    # stage the changed file <br>
                    <i>git add file1.md </i> <br>
                    <br>
                    # take a snapshot of the staging area <br>
                    <i>git commit -m "edit file1" </i> <br>
                    <br>
                    # push changes to github <br>
                    <i>git push </i>`
            ]
        }, {
            id: "chapter_12",
            title: "Models for collaborative development",
            subtitle: [
                "Models for collaborative development"
            ],
            images: ["img/400x150.png"],
            text: [
                `There are two primary ways people collaborate on GitHub:
                <ol>
                    <li>Shared repository</li>
                    <li><a class="link_button" href="https://help.github.com/articles/about-forks/">Fork</a> and <a class="link_button" href="https://help.github.com/articles/using-pull-requests">pull</a></li>
                </ol>
                With a <b>shared repository</b>, individuals and teams are explicitly designated as contributors with read, write, or administrator access. This simple permission structure, combined with features like protected branches and Marketplace, helps teams progress quickly when they adopt GitHub.
                <br><br>
                For an open source project, or for projects to which anyone can contribute, managing individual permissions can be challenging, but a <b>fork</b> and <b>pull</b> model allows anyone who can view the project to contribute. A fork is a copy of a project under an developer’s personal account. Every developer has full control of their fork and is free to implement a fix or new feature. Work completed in forks is either kept separate, or is surfaced back to the original project via a pull request. There, maintainers can review the suggested changes before they’re merged. See the <a class="link_button" href="https://guides.github.com/activities/forking/">Forking Projects Guide</a> for more information.`
            ]
        }, {
            id: "chapter_13",
            title: "Learn at your own pace",
            subtitle: [
                "Learn at your own pace"
            ],
            images: ["img/400x150.png"],
            text: [
                `The GitHub team has created a library of educational videos and guides to help users continue to develop their skills and build better software.
                <ul>
                    <li><a class="link_button" href="https://github.com/showcases/great-for-new-contributors">Beginner projects to explore</a></li>
                    <li><a class="link_button" href="https://youtube.com/githubguides">GitHub video guides</a></li>
                    <li><a class="link_button" href="https://services.github.com/on-demand/">GitHub on-demand training</a></li>
                    <li><a class="link_button" href="https://guides.github.com/">GitHub training guides</a></li>
                    <li><a class="link_button" href="https://services.github.com/resources/">GitHub training resources</a></li>
                </ol>`
            ]
        }]