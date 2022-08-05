const isAdmin = () => {
    return !!sessionStorage.getItem("token");
}
export default isAdmin;