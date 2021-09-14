/**
 *
 * @param {string} URL
 * @param {object} Method optional, default is get method
 * @returns
 */
export const fetchData = async (URL, Method = { method: 'GET' }) => {
  try {
    const response = await fetch(URL, Method);
    const data = await response.text();
    return data;
  } catch (err) {
    return err;
  }
};
