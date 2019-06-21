export /**
 *
 *
 * @param {*} wrapper
 * @param {*} prop
 */
const findByProp = (wrapper, prop) => wrapper.find(`[datatest="${prop}"]`);
