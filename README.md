
react-web-animelist
----------
#### About
This is a project you can see anime information, and you can add it to your favorite collections. This project uses API from [Anilist GraphQL](https://anilist.gitbook.io/anilist-apiv2-docs/overview/graphql/getting-started)
#### Demo Url
this project deployed on vercel you can visit this link [React Web Anime List](https://react-web-animelist.vercel.app/)
#### How to install
```console
git clone https://github.com/ade1256/react-web-animelist 
```
```console
cd react-web-anime list 
```
```console
yarn install
```
```console
yarn start
```

#### How to run test all components
```console
yarn test
```

## Source code directory
```bash
├───assets
│   └───images
├───components
│   ├───AdultIcon
│   ├───Back
│   ├───Button
│   ├───Card
│   ├───CollectionItem
│   ├───layout
│   ├───Loading
│   ├───MenuBottom
│   ├───Modal
│   ├───Pagination
│   └───TextField
├───configs
├───contexts
├───pages
│   ├───AnimeList
│   ├───CollectionDetail
│   │   └───modules
│   ├───Collections
│   │   └───modules
│   └───DetailAnime
├───queries
├───types
├───utils
└───__test__
```

## Types
```js
export interface Anime {
	id: number,
	title: {
	english: string;
	native: string;
	},
	coverImage: {
		large: string
	},
	averageScore: number
}

export interface AnimeDetail  extends  Anime {
	duration: number,
	genres: string[],
	description: string,
	seasonYear: number,
	episodes: number,
	isAdult: boolean
}

export interface AnimeCollection  extends  Anime {
	collectionId: number
}

export interface Collection {
	id: number,
	name: string
}

export type AnimeCollectionList = AnimeCollection[]
export type CollectionList = Collection[]
```

## Queries GraphQL

####  GetAllAnime
```graphql
query GetAllAnime ($page: Int, $perPage: Int) {
	Page (page: $page, perPage: $perPage) {
		pageInfo {
			total
			currentPage
			lastPage
			hasNextPage
			perPage
		}
		media(type: ANIME) {
			id
			title {
				english
				native
			}
			coverImage {
				large
			}
		averageScore
		}
	}
}
```

#### GetAnimeDetailById
```graphql
query GetAnimeDetailById($id: Int) {
	Media(id: $id) {
		id
		title {
			english
			native
		}
		coverImage {
			large
		}
		duration
		seasonYear
		averageScore
		genres
		description
		episodes
		isAdult
	}
}
```