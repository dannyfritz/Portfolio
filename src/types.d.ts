declare module "*data.json" {
  export interface Link {
    "url": string,
    "text": string,
    "icon": string,
  }
  export interface Item {
    "title": string,
    "image": string,
    "description": string,
    "links": [Link]
  }
  export interface Bio {
    "name": string,
    "description": string,
  }
  export interface Data {
    bio: Bio,
    applications: [Item],
    games: [Item],
    sites: [Item],
  }
  const data: Data;
  export default data;
}

declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
