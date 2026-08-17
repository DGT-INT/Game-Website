import useData from "./useData";

export interface Platform {
  platform: string;
}

const usePlatforms = () => {
  const { data, error } = useData<Platform>("/games");

  const uniquePlatforms = [...new Set(data.map((item) => item.platform))].map(
    (platform) => ({ platform }),
  );

  return { data: uniquePlatforms, error };
};

export default usePlatforms;
