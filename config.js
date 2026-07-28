/* =========================================================================
   THE THOREAU CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "The Thoreau Club",
    shortName: "T",
    tagline: "Health, Fitness and Community in Concord",
  },

  contact: {
    venueName: "The Thoreau Club",
    address: "275 Forest Ridge Road, Concord, MA 01742",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Thoreau+Club+Concord+MA",
    phone: "978-831-1200",
    phoneHref: "tel:+19788311200",
    email: "club@thoreauclub.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.thoreau-club.example/schedule",
      title: "Reserve a Court",
      subtitle: "Courts, swim lanes and training sessions. Live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor"}, {"name": "Swim lane", "meta": "45 min \u00b7 lap swim"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Massage", "meta": "60 min \u00b7 spa"}],
      fallbackEmail: {
        to: "club@thoreauclub.com",
        subject: "Reserve a Court",
        body: "Hi The Thoreau Club,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    tennisprog: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.thoreau-club.example/schedule",
      title: "Tennis Programs",
      subtitle: "Courts, swim lanes and training sessions. Live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor"}, {"name": "Swim lane", "meta": "45 min \u00b7 lap swim"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Massage", "meta": "60 min \u00b7 spa"}],
      fallbackEmail: {
        to: "club@thoreauclub.com",
        subject: "Tennis Programs",
        body: "Hi,\n\nI'd like to register for Tennis Programs.\n\nThank you!",
      },
    },

    training: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.thoreau-club.example/schedule",
      title: "Book a Trainer",
      subtitle: "Courts, swim lanes and training sessions. Live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor"}, {"name": "Swim lane", "meta": "45 min \u00b7 lap swim"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Massage", "meta": "60 min \u00b7 spa"}],
      fallbackEmail: {
        to: "club@thoreauclub.com",
        subject: "Book a Trainer",
        body: "Hi,\n\nI'd like to register for Book a Trainer.\n\nThank you!",
      },
    },

    classes: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.thoreau-club.example/schedule",
      title: "Class Schedule",
      subtitle: "Courts, swim lanes and training sessions. Live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor"}, {"name": "Swim lane", "meta": "45 min \u00b7 lap swim"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Massage", "meta": "60 min \u00b7 spa"}],
      fallbackEmail: {
        to: "club@thoreauclub.com",
        subject: "Class Schedule",
        body: "Hi,\n\nI'd like to register for Class Schedule.\n\nThank you!",
      },
    },

    swim: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.thoreau-club.example/schedule",
      title: "Reserve a Lane",
      subtitle: "Courts, swim lanes and training sessions. Live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor"}, {"name": "Swim lane", "meta": "45 min \u00b7 lap swim"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Massage", "meta": "60 min \u00b7 spa"}],
      fallbackEmail: {
        to: "club@thoreauclub.com",
        subject: "Reserve a Lane",
        body: "Hi,\n\nI'd like to register for Reserve a Lane.\n\nThank you!",
      },
    },

    swimschool: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.thoreau-club.example/schedule",
      title: "Swim Lessons",
      subtitle: "Courts, swim lanes and training sessions. Live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor"}, {"name": "Swim lane", "meta": "45 min \u00b7 lap swim"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Massage", "meta": "60 min \u00b7 spa"}],
      fallbackEmail: {
        to: "club@thoreauclub.com",
        subject: "Swim Lessons",
        body: "Hi,\n\nI'd like to register for Swim Lessons.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.thoreau-club.example/schedule",
      title: "Register for Camp",
      subtitle: "Courts, swim lanes and training sessions. Live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor"}, {"name": "Swim lane", "meta": "45 min \u00b7 lap swim"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Massage", "meta": "60 min \u00b7 spa"}],
      fallbackEmail: {
        to: "club@thoreauclub.com",
        subject: "Register for Camp",
        body: "Hi,\n\nI'd like to register for Register for Camp.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.thoreau-club.example/schedule",
      title: "Book a Tour and Grab a Pass",
      subtitle: "Come see the club, use the facility for a day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor"}, {"name": "Swim lane", "meta": "45 min \u00b7 lap swim"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Massage", "meta": "60 min \u00b7 spa"}],
      fallbackEmail: {
        to: "club@thoreauclub.com",
        subject: "Book a Tour and Grab a Pass",
        body: "Hi The Thoreau Club,\n\nI'm interested in Book a Tour and Grab a Pass.\n\nThank you!",
      },
    },
  },
};
