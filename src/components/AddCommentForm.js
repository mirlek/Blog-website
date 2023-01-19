import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken:token} : {};
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText,
        }, {
            headers,
        });
        const updateArticle = response.data;
        onArticleUpdated(updateArticle);
        setName('');
        setCommentText('')

    }

        return (
            <div id="add-comment-form">
                <h3>Add a comment</h3>
                {user && <p>You're posting as {user.email}</p>}
                <textarea 
                        value= {commentText}
                        onChange= {e => setCommentText(e.target.value)}
                        rows="4" 
                        cols="50" />

                <button onClick={addComment}>Add Comment</button>
            </div>
        )
}

export default AddCommentForm;