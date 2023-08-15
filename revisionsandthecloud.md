# Basic Version Control Commands

### What is Version Control?

Version control is simply a system or program that allows you to track changes that you've made to a file. This enables the user to save various versions of a file, recall previous files, compare files to each other, and most importantly, correct mistakes or bugs found within a file. Some commonly used version control systems include, Git, Visual Studio Code, and Amazon Web Service.

### What is Cloning in Git?

Cloning is a tool used to create a copy of an existing repository from a remote server. When a repository is cloned it makes copies of all versions of all files in that directory and puts them on your local system. The command `git clone your-url-here` basically creates a connection between the remote server and your local system. 

### How to track and stage files?

In order to add a file to a repository to start tracking it, you must first type in the command `git add your-filename.doc` If you have a directory and subdirectories to be staged you would type in `git add .`. You can greatly cut down on the time needed by inputting this command as opposed to inputting each file at a time. You must stage your files before they can be committed.

### How to take a snapshot of changed files?

Once you've successfully staged your files, you will want to commit those files in order to have Git create a new snapshot in the version history. The command to commit your changed file to your repository looks like this, `git commit -m your-comments-here`.

### How to send your changed files to Github?

Once you're ready to synchronize your local changes to your remote repository, you need to first tell Git to push your file to the main branch. The correct command to enter is `git push origin main`. You can then type in  `git status` to verify that everything has been committed successfully. 
 
