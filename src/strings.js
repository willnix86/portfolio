export const navigation = {
  work: "WORK",
  about: "ABOUT / CONTACT"
}

export const projects = [
  {
    title: "Lemmi",
    description: "",
    webImage: "lemmi-web",
    mobileImage: "lemmi-mobile",
    link: "https://www.lemmichat.com",
    tools: {
      mobile: ["Swift", "Kotlin"],
      front: ["Svelte", "Rollup"],
      testing: ["XCTAssert"]
    }
  },
  {
    title: "Get Your Beerings",
    description: "An app to find pubs, breweries, and beer-gardens nearby on in a place the user plans to visit. Get Your Beering began as a Progressive Web App before being developed for iOS.",
    webImage: "beerings-web",
    mobileImage: "beerings-mobile",
    link: "https://beerings.now.sh/",
    iosLink: "https://apps.apple.com/us/app/get-your-beerings/id1484223930?ls=1",
    tools: {
      mobile: ["Swift", "ArcGIS for iOS"],
      front: []
    }
  },
  {
    title: "Ppl",
    description: "Built to help users develop the people in their care, whether those people are a student, a client, a subordinate, or a member of the user's congregation. The focus is simple: set goals, track progress, and schedule regular face-time.",
    webImage: "ppl-web",
    mobileImage: "ppl-mobile",
    link: "https://wheremypplat.herokuapp.com/",
    tools: {
      front: ["HTML5", "CSS", "JavaScript", "jQuery"],
      back: ["Node", "Express", "Mocha", "Chai", "REST", "MongoDB", "Mongoose", "Passport", "JWT Authentication"],
    }
  },
  {
    title: "English Rules",
    description: "A web-app for teachers, and students aged 8-10, to aid the learning of English grammar. Teachers can customize a variety of exercises to better match the content of their curriculum.",
    webImage: "english-web",
    mobileImage: "english-mobile",
    link: "https://english-rules.herokuapp.com/",
    tools: {
      front: ["React", "Redux", "React Drag n Drop"],
      back: ["Node", "Express", "Mocha", "Chai", "REST", "MongoDB", "Mongoose", "Passport", "JWT Authentication"],
      testing: ["Enzyme", "Jest"]
    }
  }
];

export const links = {
  twitter: "https://twitter.com/willnix86",
  email: "mailto:will_nixon@me.com?subject=Contact from Website",
  instagram: "https://www.instagram.com/willnix86"
}