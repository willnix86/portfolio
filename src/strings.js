export const navigation = {
  about: "ABOUT",
  work: "WORK",
}

export const projects = [
  {
    title: "ENdi",
    description: "A journaling app for women who suffer from Endometriosis. (Currently in development)",
    webImage: "endi-web",
    // mobileImage: "lemmi-mobile",
    tools: {
      "Mobile": ["Swift", "Kotlin"],
      "Front-End": ["TypeScript", "React", "Next.js", "ChakraUI"],
      "Testing": ["XCTAssert"]
    },
    links: {
      "Website": "https://www.myendiapp.com",
      "Repo (web)": "https://github.com/JenixTech/endi-web"
    }
  },
  {
    title: "Lemmi",
    description: "An assistive text-to-speech (AAC) app for Android and iOS that gives users the independence to fully take part in conversations, and to share their thoughts and needs clearly with others. Initially developed for the web, then converted to a hybrid application using Apache Cordova, I ported Lemmi to native SDKs to improve performance and make use of APIs not accessible otherwise.",
    webImage: "lemmi-web",
    mobileImage: "lemmi-mobile",
    tools: {
      "Mobile": ["Swift", "Kotlin"],
      "Front-End": ["Svelte", "Rollup"],
      "Testing": ["XCTAssert"]
    },
    links: {
      "Website": "https://www.lemmichat.com",
      "Repo (web)": "https://github.com/willnix86/Lemmi"
    }
  },
  {
    title: "Get Your Beerings",
    description: "An app to find pubs, breweries, and beer-gardens nearby on in an area the user plans to visit. Get Your Beering began as a Progressive Web App before being developed for iOS.",
    webImage: "beerings-web",
    mobileImage: "beerings-mobile",
    iosLink: "https://apps.apple.com/us/app/get-your-beerings/id1484223930?ls=1",
    tools: {
      "Mobile": ["Swift", "ArcGIS"],
      "Front-End": ["Javascript", "jQuery"],
      "APIs": ["Google Places", "Google Maps", "Google Distance Matrix", "LocationIQ"]
    },
    links: {
      "Website": "https://beerings.now.sh/",
      "App Store": "https://apps.apple.com/us/app/get-your-beerings/id1484223930?ls=1",
      "Repo (web)": "https://github.com/willnix86/get-your-beerings",
      "Repo (mobile)": "https://github.com/willnix86/beerings-ios-public"
    }
  },
  {
    title: "Jenix Tech LTD",
    description: "Website for Jenix Technologies LTD - a software development company building mobile and full-stack applications. I chose to use Svelte and Tailwind CSS to ensure the fastest, highest-quality development cycle that resulted in the smallest possible build package.",
    webImage: "jenix-web",
    mobileImage: "jenix-mobile",
    tools: {
      "Front-End": ["Svelte", "Tailwind", "Rollup"]
    },
    links: {
      "Website": "https://www.jenixtech.com",
      "Repo (web)": "https://github.com/willnix86/jenix"
    }
  },
  {
    title: "English Rules",
    description: "A web-app for teachers, and students aged 8-10, to aid the learning of English grammar. Teachers can customize a variety of exercises to better match the content of their curriculum.",
    webImage: "english-web",
    mobileImage: "english-mobile",
    tools: {
      "Front-End": ["React", "Redux", "React Drag n Drop"],
      "Back-End": ["Node", "Express", "Mocha", "Chai", "REST", "MongoDB", "Mongoose", "Passport", "JWT Authentication"],
      "Testing": ["Enzyme", "Jest"]
    },
    links: {
      "Website": "https://english-rules.herokuapp.com/",
      "Repo (client)": "https://github.com/willnix86/english-rules-client",
      "Repo (api)": "https://github.com/willnix86/english-rules-server",
    }
  },
  {
    title: "Ppl",
    description: "Built to help users develop the people in their care, whether those people are a student, a client, a subordinate, or a member of the user's congregation. The focus is simple: set goals, track progress, and schedule regular face-time.",
    webImage: "ppl-web",
    mobileImage: "ppl-mobile",
    tools: {
      "Front-End": ["HTML5", "CSS", "JavaScript", "jQuery"],
      "Back-End": ["Node", "Express", "Mocha", "Chai", "REST", "MongoDB", "Mongoose", "Passport", "JWT Authentication"],
    },
    links: {
      "Website": "https://wheremypplat.herokuapp.com/",
      "Repo": "https://github.com/willnix86/ppl"
    }
  },
].reverse();

export const links = {
  twitter: { label: "TWITTER", url: "https://twitter.com/willnix86" },
  linkedin: { label: "LINKEDIN", url: "https://www.linkedin.com/in/willnixon1" },
  github: { label: "GITHUB", url: "https://github.com/willnix86" }
};

export const about = {
  email: { label: "Contact Me", url: "mailto:will_nixon@me.com?subject='Contact from Website'" }
}