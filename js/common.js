"use strict";


import redirectPreferredLocale from './include/locale-preferred';
import initActiveLocale from './include/locale-active';
import initDropdown from './include/dropdown';
import clickBlur from './include/click-blur';
import './include/track';


(() => {
    const isRedirected = redirectPreferredLocale();

    if (isRedirected) {
        return;
    }

    // start listening click
    clickBlur();

    /**
     * Active locale
     */
    initActiveLocale();

    /**
     * Dropdown
     */
    initDropdown();
})();
