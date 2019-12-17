import { Issue } from './issue';

export const ISSUES: Issue[] = [
   {"title": "Origin", 
    "published": new Date(),  
    "created": new Date(),
    "navs": [ "origin-001","origin-002","origin-003",
                "origin-004","origin-005","origin-006",
                "origin-007","origin-008","origin-009"],
    "paths": ["/assets/scanned_comics/origin-001.jpg", "/assets/scanned_comics/origin-002.jpg",
    "/assets/scanned_comics/origin-003.jpg", "/assets/scanned_comics/origin-004.jpg", 
    "/assets/scanned_comics/vk2-005.jpg", "/assets/scanned_comics/vk2-006.jpg",
    "/assets/scanned_comics/vk2-007.jpg", "/assets/scanned_comics/vk2-008.jpg",
    "/assets/scanned_comics/vk2-009.jpg"]
    },
    { "title": "Escape From Za", 
    "published": new Date(),  
    "created":  new Date(),
    "navs": [ "efz-001","efz-002","efz-003",
                "efz-004","efz-005"],
    "paths": ["/assets/scanned_comics/efz-001.jpg", "/assets/scanned_comics/efz-002.jpg",
    "/assets/scanned_comics/efz-003.jpg", "/assets/scanned_comics/efz-004.jpg", 
    "/assets/scanned_comics/efz-005.jpg"]
    },
];

