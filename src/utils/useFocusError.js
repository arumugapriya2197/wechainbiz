const { useEffect } = require("react");


const useFocusError = (errors, isSubmitting, isValidating) => {

    useEffect(() => {
        if (isSubmitting && !isValidating) {
            let [name = ""] = Object.keys(errors);
            if (name) {
                let elm = document.querySelector(`[name="${name}"]`);
                let delay = 0
                if ('scrollIntoView' in elm) {
                    elm.scrollIntoView({ behavior: "smooth", block: 'center' })
                    delay = 500;
                }
                setTimeout(() => {
                    elm.focus();
                }, delay);
            }
        }

    }, [errors, isSubmitting, isValidating])
}

export default useFocusError