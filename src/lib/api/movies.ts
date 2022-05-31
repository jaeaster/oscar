import { http } from '@tauri-apps/api';
import type { CamelCasedPropertiesDeep } from 'type-fest';
import camelcaseKeys from 'camelcase-keys';

const API_URL = 'https://popcorn-time.ga';
const MOVIES_URL = `${API_URL}/movies`;
const MOVIE_URL = `${API_URL}/movie`;

export interface Torrent {
	[language: string]: {
		[resolution: string]: {
			url: string;
			provider: string;
			source: string;
			seed: number;
			peer: number;
			size: number;
			filesize: string;
		};
	};
}

interface MovieApiResponse {
	_id: string;
	imdb_id: string;
	tmdb_id: string;
	title: string;
	year: string;
	original_language: string;
	exist_translations: string[];
	synopsis: string;
	runtime: string;
	released: number;
	certification: string;
	torrents: Torrent[];
	trailer: string;
	genres: string[];
	images: {
		poster: string;
		fanart: string;
		banner: string;
	};
	rating: {
		percentage: number;
		watching: number;
		votes: number;
		loved: number;
		hated: number;
	};
}

export type Movie = CamelCasedPropertiesDeep<MovieApiResponse>;

async function index(page = 1): Promise<Movie[]> {
	const response = await http.fetch<MovieApiResponse[]>(`${MOVIES_URL}/${page}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		}
	});

	return camelcaseKeys(response.data, { deep: true });
}

async function get(id: string): Promise<Movie> {
	const response = await http.fetch<MovieApiResponse>(`${MOVIE_URL}/${id}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		}
	});

	return camelcaseKeys(response.data, { deep: true });
}

export default {
	index,
	get
};
