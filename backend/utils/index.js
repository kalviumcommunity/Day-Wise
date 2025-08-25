export const formatResponse = (response) => {
    return response.trim().split('\n').map(line => line.trim()).filter(line => line.length > 0);
};

export const handleError = (error) => {
    console.error("An error occurred:", error);
    return { message: "An unexpected error occurred. Please try again later." };
};