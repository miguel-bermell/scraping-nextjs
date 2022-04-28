import { SortBy } from "../../../interfaces"
import { SORT_BY } from "../../../utils"
import styles from './styles.module.css'

export const SortBySelect = ({ setSortBy, sortBy } : SortBy) => {
  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label}>Ordenar por:</label>
      <select
        className={styles.select}
        onChange={(e) => setSortBy(e.currentTarget.value)}
        defaultValue={sortBy}
      >
        <option className={styles.option} value={SORT_BY.PRICE}>
          Precio
        </option>
        <option className={styles.option} value={SORT_BY.NAME}>
          Nombre
        </option>
      </select>
    </fieldset>
  )
}