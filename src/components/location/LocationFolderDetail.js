                
                
                
                
                
                
                
                <Modal
                    closeIcon
                    open={open}
                    trigger={<Button floated='right' icon>
                            <Icon name='trash alternate outline' />
                            </Button>}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    >
                    <Header content='Are you sure you want to Delete this Collection Folder?' />
                    <Modal.Content>
                        <p>
                        Warning: Deleting this folder will also delete any images saved in this collection. 
                        If you would like to keep the images, click X to cancel now and move the images to another collection folder before deleting the folder.
                        </p>

                        <p>If you would prefer to just edit the folder name, click Edit below.</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => {
                            deleteLocation(location?.id)
                                .then(() => {
                                    history.push("/locations")
                                })
                                setOpen(false)}
                            }>
                        Delete
                        </Button>
                        <Button color='blue' onClick={() => setOpen(false)}>
                        Edit
                        </Button>
                    </Modal.Actions>
                </Modal>