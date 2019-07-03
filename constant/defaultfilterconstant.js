import commonConstant from 'constant/commonconstant';

const defaultQueryParams = {

    "get-files" : {
        'id' : 'NA',
        'offset':commonConstant.DEFAULT_PAGINATION_OFFSET,
        'limit':commonConstant.DEFAULT_PAGINATION_LIMIT,
        'sortFields':['category_name'],
        'sortBy':'category_name',
        'sortOrder':'ASC'
    }
};

export default defaultQueryParams;