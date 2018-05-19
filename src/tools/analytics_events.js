import { analyticsCategories, analyticsActions } from '../tools/constants';

export const openModalEvent = {
    category: analyticsCategories.navigate,
    action: analyticsActions.openModal,
}

export const closeModalEvent = {
    category: analyticsCategories.navigate,
    action: analyticsActions.closeModal,
}

export const navigateByButtonEvent = {
    category: analyticsCategories.navigate,
    action: analyticsActions.navigateByButton,
}
