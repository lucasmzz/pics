import axios from 'axios';

export default axios.create({
	baseUrl: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID 95d664a5232a8ca0f7acc6bcfc014fe288b48230074b08ce30103f759453648a'
	}
});