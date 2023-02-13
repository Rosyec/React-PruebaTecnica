export const Modal = ( { user, onDelete }:Props ) => {
    return (
        <>
            <div className="modal" id="exampleModal" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure want to delete { user } ? </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={ onDelete } data-bs-dismiss="modal" aria-label="Close" style={{width: '5em'}}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface Props {
    user: string,
    onDelete: () => void
}
