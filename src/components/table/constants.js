const extractDomain = (url) => {
  const match = String(url[0]).match(/(?:https?:\/\/)?(?:www\.)?(.+?)(?:\/|$)/);
  return match ? match[1] : url;
};

const urlsComparator = (a, b) =>
  extractDomain(a).localeCompare(extractDomain(b));

export const TABLE_COLUMNS_SETTINGS = [
  { field: "name", headerName: "name", width: 200 },
  { field: "country", headerName: "country", width: 200 },
  { field: "alpha_two_code", headerName: "country code", width: 150 },
  {
    field: "web_pages",
    headerName: "web link",
    width: 180,
    sortComparator: urlsComparator,
    renderCell: (params) => {
      return <a href={params.value[0]}>{params.value}</a>;
    },
  },
];
