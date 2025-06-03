import React, { useState } from 'react';

const CreateRoleModal = () => {
    // const { CreateRol } = useRolStore();
    const [roleName, setRoleName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setRoleName('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRoleName(e.target.value);
    };

    const handleSubmit = async () => {
        if (roleName.trim() !== '') {

            closeModal();
        }
    };

    return (
        <div>

            {isModalOpen && (
                <div>
                    <div className="fixed inset-0 bg-black opacity-50"></div>

                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="modal-container bg-white p-6 rounded-lg shadow-lg relative">
                        
                            <h2 className="text-xl font-semibold mb-4">Crear Nuevo Rol</h2>
                            <input
                                type="text"
                                placeholder="Role Name"
                                value={roleName}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                            />
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateRoleModal;
