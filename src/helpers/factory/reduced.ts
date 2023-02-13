export const reduceValue = (array: Array<any>, type?: 'totalItems') => {
    if (!array?.length) return [];

    if(type !== 'totalItems') {
        const reduced = array?.map((page) => page?.items.length)
     .reduce((acc, curr) => acc + curr);
    return reduced;
    }


    const reduced = array?.length && array.length > 1 ? array?.reduce((acc, curr) => acc + curr,  array[0]) : 0;
    return reduced || 0;
}

export const reduceValueTotalItems = (array: Array<any>) => {


}