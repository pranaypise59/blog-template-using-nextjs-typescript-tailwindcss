import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */
export const PRANAY: IAuthor = {
    name: "Pranay Pise",
    designation: "Software Developer",
    bio: "As a Pharmacy background professional, I faced a significant challenge in my life when I discovered my passion for web development. Despite not having any friends in the field, I was determined to learn and grow in this field. I turned to online resources such as YouTube and Google to acquire the necessary knowledge, and even took on freelance work to gain experience and make money. Through persistence and hard work, I was able to land an internship and further hone my skills, proving that with determination and resourcefulness, one can overcome any obstacle and achieve their goals.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/pranaypise59'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/pranay-pise-37a797227/'
        },
    ]
}
export const MAYUR: IAuthor = {
    name: "Mayur Nalwala",
    designation: "Software Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/nmayur'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/mayur-nalwala/'
        },
    ]
}

export const RUPALI: IAuthor = {
    name: "Rupali Yadav",
    designation: "IT Analyst",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/rupali-yadav'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/rupali-yadav-087bb4112/'
        },
    ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Webophihlia';
export const WEBSITE_URL: string = 'https://nextjs-simple-blog-template.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'Next Blog',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            // to open a link in new tab pass newTab: true
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
            newTab: true
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
            newTab: true
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/',
            icon: <AiFillFacebook />
        },
        {
            link: 'https://www.instagram.com/',
            icon: <AiFillInstagram />
        },
        {
            link: 'https://twitter.com/WebExpe',
            icon: <AiOutlineTwitter />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Nextjs simple blog template",
    description: "A simple blog template using NextJS and Typescript.",
    keywords: "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    author: `${MAYUR.name}, ${RUPALI.name}`,
    twitterHandle: '@WebExpe',
    ogImage: '/public/images/og-image.jpg'
}