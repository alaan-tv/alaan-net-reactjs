export const responsive = {
	desktop: {
		breakpoint: {max: 3000, min: 1024},
		items: 3,
		slidesToSlide: 3 // optional, default to 1.
	},
	tablet: {
		breakpoint: {max: 1024, min: 464},
		items: 2,
		slidesToSlide: 2 // optional, default to 1.
	},
	mobile: {
		breakpoint: {max: 464, min: 0},
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};

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

export const getQs=(name)=>{
	let search = window.location.search;
	let params = new URLSearchParams(search);
	return params.get(name);

}

