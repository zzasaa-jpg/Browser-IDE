import { useState } from "react";

export function useUndoRedo(initialValue = null) {
    const [history, setHistory] = useState({
        past: [],
        present: initialValue,
        future: [],
    });

    const setNewState = (newState) => {
        setHistory((prev) => ({
            past: prev.present !== null ? [...prev.past, prev.present] : prev.past,
            present: newState,
            future: [],
        }));
    };

    const undo = () => {
        setHistory((prev) => {
            if (prev.past.length === 0) return prev;

            const previousState = prev.past[prev.past.length - 1];
            const newState = prev.past.slice(0, prev.past.length - 1);

            return {
                past: newState,
                present: previousState,
                future: prev.present !== null ? [prev.present, ...prev.future] : prev.future,
            };
        });
    };

    const redo = () => {
        setHistory((prev) => {
            if (prev.future.length === 0) return prev;

            const nextState = prev.future[0];
            const newFuture = prev.future.slice(1);

            return {
                past: prev.present !== null ? [...prev.past, prev.present] : prev.past,
                present: nextState,
                future: newFuture,
            };
        });
    };

    const reset = (value = null) => {
        setHistory({
            past: [],
            present: value,
            future: [],
        });
    };

    return {
        state: history.present,
        setNewState,
        undo, redo, reset,
        canUndo: history.past.length > 0,
        canRedo: history.future.length > 0,
        past: history.past,
        future: history.future,
        reset
    };
}