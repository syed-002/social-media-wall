# Social Media Wall

## Setup Instructions

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16.x or later): JavaScript runtime needed for running the application and managing dependencies.
- **npm** (Node Package Manager): Comes with Node.js, used for managing packages.
- **A Code Editor**: Recommended: [Visual Studio Code](https://code.visualstudio.com/), for editing and running the project.

### Installation Steps

Follow these instructions to set up the project on your local machine:

  1. **Install Node.js and npm**

   - **Windows**: Download and run the installer from the [Node.js website](https://nodejs.org/). This will also install npm.
   - **macOS**: Use [Homebrew](https://brew.sh/) to install Node.js. Open Terminal and run:
     ```bash
     brew install node
     ```
   - **Linux**: Install using your package manager. For Ubuntu, use:
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

2. **Verify Node.js and npm Installation**

  - Open a terminal or command prompt and run the following    commands to check if Node.js and npm are installed correctly:

    ```bash
    node -v
    npm -v
    ```

  - You should see version numbers for both.

3. **Download from the zip file from the drive link**

  https://drive.google.com/file/d/144OqDlNiSAd0tE-5bOa4sCKieECzAfbV/view?usp=sharing

4. Unzip the zip folder and go the 'social-media-wall' directory

  ```
  cd social-media-wall
  npm install
  npm start
  ```

- There might be warnings about deprecations, please ignore and wait until the app starts running in the browser

### Features

- Menu bar with notifications and profile dropdown.
- Add a post section to create new posts.
- Display posts in reverse chronological order.
- Like, comment, and delete features for each post.
- A collapsible chat window that supports sending messages.
- Hardcoded list of friends with search functionality.

### Assumptions

- The posts and chat messages are stored in the local state (no backend integration).
- The chat window is fixed at the bottom-right of the screen and remains visible while scrolling.
