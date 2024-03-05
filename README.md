## Hamburger Menu


The Hamburger Menu is a user interface element in web development designed for mobile viewing. It provides a compact and accessible way for users to navigate and access the main headers of a website. Typically represented by three horizontal lines, clicking or tapping on the hamburger icon reveals a dropdown or slide-in menu, optimizing the user experience on smaller screens by conserving space and prioritizing essential navigation elements.


### What are we doing?

In this tutorial, we will be adding the Hamburger Menu to an already made statistics page of a website.
This includes an already made Header.


### 1. Create the Hamburger Menu Structure in HTML

We will begin by the Hamburger Menu Structure to our HTML file.
This includes the Hamburger Navigation and the Hamburger Button which was gotten from font awesome.

```HTML
<nav class="hamburger-nav">
    <a href="#">Project</a>
    <a href="#">About Us</a>
    <a href="#">Blog</a>
    <a href="#">Contact Us</a>
</nav>
<button class="menu-toggle">
    <i class="fa-solid fa-bars"></i>
</button>
```

### 2. Style the Hamburger Menu Button

We will then style the Hamburger Menu Button to fit the page.
We will do this with CSS.

```CSS
.menu-toggle {
    color: #fff;
    display: none;
    padding: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
```

As you can see, the display-none styling sets the default to be initially hidden on larger screens.
This is because Hamburger Menus are to be mainly used on Mobile View.


### 3. Style the Navigation Links

Next, we are going to style the Navigations Links that are going shown when the Hamburger Menu is clicked

```CSS
.hamburger-nav {
    display: none;
    list-style: none;
    padding: 0;
    margin: 0;
}

.hamburger-nav a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #000;
    transition: all 0.25s ease-in-out;
}

.hamburger-nav a:hover {
    color: #fff;
    background-color: #007fff;
 }
```
As you can see also, the display-none styling of the Hamburger Navigations sets the 
default to be initially hidden on larger screens.


### 4. Using JavaScript to toggle the menu 

We use JavaScript to toggle the navigation menu when the Hamburger Button is clicked

```JavaScript
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.hamburger-nav');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});
```

### 5. Using JavaScript to escape from Hamburger Menu

We use JavaScript to add event click to escape the Hamburger Menu when the Escape button 
is pressed on the keyboard.

```JavaScript
document.addEventListener('keydown', (event) => {
    if (navigation.classList.contains('active') && event.key === 'Escape') {
        navigation.classList.remove('active');
    }
});
```

### 6. Using CSS to toggle Responsiveness

This snippet below will make the Hamburger Navigation Links to appear only when the screen size is 768px and below.
This will also make the Main Header Navigation Link to disappear.
The Hamburger only works for a Phone Screen Size

``` CSS
@media (max-width: 768px) {
    .main-nav {
        display: none;
    }

    .hamburger-nav {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
    }

    .hamburger-nav.active {
        top: 0;
        margin-top: 56px;
    }

    .menu-toggle {
        display: block;
    }
}
```