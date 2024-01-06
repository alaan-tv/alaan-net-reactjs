

export const ajax_url = (url=null) => {
	let page_url = window.location.href;
	if (page_url.includes('www.')) {
		return 'https://www.alaan.tv/'+url;
	} else if (page_url.includes('stg.')) {
		return 'https://stg.alaan.tv/'+url;
	} else {
		return 'http://alaan.local/'+url;
	}
}

export const formData = obj => {
	const formData = new FormData();
	Object.entries(obj).forEach(([key, value]) => formData.append(key, value));
	return formData;
}

export const getQS=(name)=>{
	let search = window.location.search;
	let params = new URLSearchParams(search);
	return params.get(name);

}

