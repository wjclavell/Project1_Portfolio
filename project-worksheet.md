# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete

## Portfolio Website

link to my website --> [wjclavell.com](https://wjclavell.com)

## Project Description

My final project will be a personal portfolio website. It will include my projects that I've worked on (displayed in a dropdown menu and a image carousel), an About Me section, Skills section, and Contact form. Along with a header with my monogram, navbar/hamburger at top with links for each section & my personal logo, and a footer at the bottom including links to my social media and back to top button. I will be implementing scroll animations for each section and a dark/light mode feature as well.

Some design inspirations:
- http://findmatthew.com/
- https://loerarchitecten.com/en/
- https://www.apple.com/macbook-pro-16/
- http://ejosue.com/

## Google Sheet

List of [projects](https://docs.google.com/spreadsheets/d/18r08nO91byLTxZ8zVRghWGyLtIKrXzBa8P6sGM9T19M/edit#gid=0)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://res.cloudinary.com/wjclavell/image/upload/v1594606509/mobile-wireframe_wfp670.png)
- [Tablet](https://res.cloudinary.com/wjclavell/image/upload/v1594654476/tablet-wireframe_cpjruc.png)
- [Desktop](https://git.generalassemb.ly/SEIR-629/project-1-portfolio/blob/master/readme-assets/desktop.png)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

List of features to be included, prioritized in a [Time and Priority Matrix](https://res.cloudinary.com/wjclavell/image/upload/v1594481600/Time-Priority-Matrix_project1.png)

Estimated time to complete: 20hrs (feel like it will definitely be more once I get started) 

Break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Pull data using google json api
- Render data on page 
- About me, contact, projects, skills sections 
- hamburger menu on mobile
- sticky nav bar on desktop
- project carousel
- project dropdown menu
- grid layout
- flex sections
- hover description for projects
- monogram at top

#### PostMVP 

- Scroll animations
- dark/light mode
- personal logo
- custom cursor
- implement drawing app functionality into website


## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | ~ Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | H | 1.5hr | 3hr | 3hr|
| Project carousel | H | 2hr | 4hr | 4hr|
| Sticky Nav | H | 1hr | .5hr | .5hr|
| Grid and flex layout | H | 1.5hr| 3hr | 3hr |
| Other sections| H | 2hr | 4hr | 4hr|
| All projects page | M | 1.5hrs| 1.5hr | 1.5hr |
| Responsive | H | 2hr | 4hr | -hr|
| Social Media Icons | L | .5hr | .25hr | .25hr|
| Project hover description | M | 1hr| 2hr | 2hr |
| Google API | H | 1hr | 2hr | 2hr|
| Monogram | L | .5hr | 1hr | 1hr|
| Total | - | 14.5hrs| 25.25hrs* | 25.25hrs |

 *My time tracking skills were not that great...Time Invested was most likely higher than recorded

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Scroll animations | H | 2.5hr | -hr | -hr|
| Dark/light mode | M | 1hr | 2.25hr | 2.25hr|
| Personal logo | L | 1.5hr | .75hr | .75hr|
| Custom cursor | M | 1.5hr | -hr | -hr|
| Drawing functionality | L | 2hr | -hr | -hr|
| Total | - | 8.5hrs| -hrs | -hrs |

## Additional Libraries
 jQuery - used to populate skills section and project section
 
 SwiperJS - used to create the cube project carousel

## Code Snippets

This function was used to create a read-more (and similarly a read-less) button for my About Me section. The text would be very long on smaller screens so I wrapped part of it in a span and was able to hide it and once pressed it will expand to show the full text. It will also create a new button underneath saying 'read less' so you can click and collapse the text as well.

```
//*function to display complete about me on mobile
function readMore() {
  const $dots = $("#dots");
  const $more = $("#more");
  const $buttontxt = $("#read-more");
  let showAll = false;

  if (showAll === false) {
    $dots.css("display", "none");
    $buttontxt.remove();
    $(".about-flex").append(
      '<button onclick="readLess()" id="read-less">read less <i class="fas fa-chevron-up"></i></button>'
    );
    $more.css("display", "inline");
  } 
}
```

This function was used to get my dark/light mode toggle working. It will change my logo color, as well as the sun/moon icon, along with all the color styles of my webpage. It does this by accessing a checkbox input (which is linked to the icons) and using root variables that I have defined in CSS and changing the attribute name that holds these variables.

```
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    $(".logo img").attr(
      "src",
      "https://res.cloudinary.com/wjclavell/image/upload/v1594847186/WC_logo.png"
    );
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    $(".logo img").attr(
      "src",
      "https://res.cloudinary.com/wjclavell/image/upload/v1594847322/WC_logo_red.png"
    );
  }
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: My projects would not show up in the slider until I adjusted the window size, or swiped on top of it on mobile                                
**RESOLUTION**: The slider was being created before the project data was retrieved. I nested the slider creation code block inside the the function where I am using the json data, this way they both are created at the same time and the project slider is displayed automatically.

## Previous Project Worksheet
 - [Readme's](https://github.com/jkeohan/fewd-class-repo/tree/master/final-project-worksheet/project-worksheet-examples)
 - [Best of class readme](https://github.com/jkeohan/fewd-class-repo/blob/master/final-project-worksheet/project-worksheet-examples/portfolio-gracie.md)
