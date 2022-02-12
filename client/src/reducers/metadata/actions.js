import { types } from "./index";

export const getMetadataAction = data => {
    data.sites && (data.sites = data.sites.map(({id, name}) => ({value: id, label: name})));

    return {
        type: types.GET_METADATA,
        payload: data
    }
};