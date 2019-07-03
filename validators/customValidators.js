const customValidators = {
    isValidUserActivityArray : arr => {
        if(Array.isArray(arr)) {
            for(let  i=0;i<arr.length;i++) {
                if(!(arr[i].hasOwnProperty('media_id') && arr[i].hasOwnProperty('end_duration') && arr[i].hasOwnProperty('is_media_completed'))) {
                    return false;
                }
                if(i+1 == arr.length) {
                    return true;
                }
            }
        } else {
            return false;
        }
    }
};

export default customValidators;
