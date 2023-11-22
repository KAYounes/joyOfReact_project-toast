export function formReducer(prev, job) {
    const { type } = job;

    switch (type) {
        case "change-variant": {
            return { message: prev.message, variant: job.to };
        }
        case "change-message": {
            return { message: job.to, variant: prev.variant };
        }

        default: {
            return prev;
        }
    }
}
