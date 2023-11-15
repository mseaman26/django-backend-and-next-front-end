export const logoutUser = async (baseURL) => {
    const response = await fetch(`${baseURL}/api/logout/`, {
      method: 'POST',
      credentials: 'include', // This is important for including cookies in the request
    });
  
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Logout failed');
    }
  };

  export const getCSRFToken = () => {
    const name = 'csrftoken';
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  };