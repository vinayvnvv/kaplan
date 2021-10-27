import Books from "./screens/books/Books";
import Courses from "./screens/courses/Courses";
import Management from "./screens/mangement/Management";

export const routes = [
    {component: Books, path: '/books'},
    {component: Courses, path: '/courses'},
    {component: Management, path: '/management'},
    {component: Books, path: '/'},
]