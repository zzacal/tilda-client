import { fetch, mock } from './client';

export default (url: string, mockPath: string) => {
    return {
        mock: mock(url, mockPath),
        fetch: fetch(url)
    }
}
