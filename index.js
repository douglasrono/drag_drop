let dragItem = document.getElementById("dragItem");
            dragItem.addEventListener("dragstart", e=>{
                e.dataTransfer.setData("text/plain","drag me now");
            });


                for(let dropBox of document.querySelectorAll(".dropBox")){
                    // dragded item is getting swapped
                    dropBox.addEventListener("dragover", e=>{
                    e.preventDefault();
                    dropBox.classList.add("itemSwap");
                    });

                    // the item  is no longer over the dropBox
                    dropBox.addEventListener("dragleave", e=>{
                    dropBox.classList.remove("itemSwap");
                    });
                    //item being swapped 
                    dropBox.addEventListener("drop",e=>{
                        e.preventDefault();
                        dropBox.appendChild(dragItem)
                    
                       
                    });

                }
