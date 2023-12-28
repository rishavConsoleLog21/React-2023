import { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChallengesContext } from "../store/challenges-context.jsx";
import Modal from "./Modal.jsx";
import images from "../assets/images.js";

export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <ul id="new-challenge-images">
          {images.map((image) => {
            const sign = Math.random() > 0.5 ? 1 : -1;
            return (
              <motion.li
                initial={{
                  opacity: 0,
                  x: sign * (90 * Math.random() + 30),
                  y: 90 * Math.random() + 30,
                }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
                key={image.alt}
                onClick={() => handleSelectImage(image)}
                className={selectedImage === image ? "selected" : undefined}
              >
                <img {...image} />
              </motion.li>
            );
          })}
        </ul>

        <p className="new-challenge-actions">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
              mass: 0.5,
            }}
            type="button"
            onClick={onDone}
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
              mass: 0.5,
            }}
          >
            Add Challenge
          </motion.button>
        </p>
      </form>
    </Modal>
  );
}
