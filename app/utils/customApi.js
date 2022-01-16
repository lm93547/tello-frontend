import Cookies from "js-cookie";
import ky from "ky";

export const kyInstance = ky.create({
	headers: {
		Authorization: `Token ${Cookies.get('token')}`,
	}
});
