import useData from "./useData";

interface Platform {
  platform: string;
}

const usePlatforms = () => useData<Platform>("/games");

export default usePlatforms;
