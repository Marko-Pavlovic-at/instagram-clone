Note : this project comes with files for the pictures and icons

## Requirements

- create first post DONE
- use semantic html DONE
- add hover effects to the icons (tone down) DONE

## Stretch Goals

- use js to render all posts DONE
- increase like of the post when he clicks on the heart icon

Design file https://www.figma.com/design/rLnCOsRn9RtdgJD4BSZqf4/Oldagram--Copy-?node-id=0-1&p=f&t=Ql2jbKc3VcBjoRYc-0

## posts

const posts = [
{
name: "Vincent van Gogh",
username: "vincey1853",
location: "Zundert, Netherlands",
avatar: "images/avatar-vangogh.jpg",
post: "images/post-vangogh.jpg",
comment: "just took a few mushrooms lol",
likes: 21
},
{
name: "Gustave Courbet",
username: "gus1819",
location: "Ornans, France",
avatar: "images/avatar-courbet.jpg",
post: "images/post-courbet.jpg",
comment: "i'm feelin a bit stressed tbh",
likes: 4
},
{
name: "Joseph Ducreux",
username: "jd1735",
location: "Paris, France",
avatar: "images/avatar-ducreux.jpg",
post: "images/post-ducreux.jpg",
comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
likes: 152
}
]

## plan

### Setup

- make git repo DONE

### Structure

- create the structure hardcoded in html DONE
- logo already there put it in a header add a profile picture DONE
- in main put the first post as a section DONE
- profile picture, profile name and location, selfie picture, icons , likes , comments DONE

### Styling

- copy the design from the design file

### logic

- create a section give it an id and grab it in js DONE
- create a function render DONE
- inside the function use an forEach loop to loop trough the array length DONE
- at each iteration write the innerhtml DONE
- use the current html as a template DONE
