function ApiService(search, page) {
  const apiKey = '22940171-5681176a4d1601b312f680141';
  return fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
}
export default ApiService;
