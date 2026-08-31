
/* ============ Sample data (parsed from user's uploaded sheet) ============ */
const SAMPLE_BAEKYA = {"dates": [{"month": 5, "day": 21, "dow": "목", "type": "prep"}, {"month": 5, "day": 22, "dow": "금", "type": "prep"}, {"month": 5, "day": 23, "dow": "토", "type": "event"}, {"month": 5, "day": 24, "dow": "일", "type": "event"}, {"month": 5, "day": 29, "dow": "금", "type": "prep"}, {"month": 5, "day": 30, "dow": "토", "type": "event"}, {"month": 5, "day": 31, "dow": "일", "type": "event"}, {"month": 6, "day": 5, "dow": "금", "type": "prep"}, {"month": 6, "day": 6, "dow": "토", "type": "event"}, {"month": 6, "day": 7, "dow": "일", "type": "event"}, {"month": 6, "day": 12, "dow": "금", "type": "prep"}, {"month": 6, "day": 13, "dow": "토", "type": "event"}, {"month": 6, "day": 14, "dow": "일", "type": "event"}, {"month": 6, "day": 19, "dow": "금", "type": "prep"}, {"month": 6, "day": 20, "dow": "토", "type": "event"}, {"month": 6, "day": 21, "dow": "일", "type": "event"}, {"month": 6, "day": 22, "dow": "월", "type": "event"}], "people": [{"no": 1, "name": "이주연", "role": "매니저", "note": "MANAGER", "attendance": [true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, false]}, {"no": 2, "name": "류희정", "role": "부매니저", "note": "SUBMANAGER", "attendance": [true, false, true, true, false, false, true, false, true, true, false, false, false, false, false, false, false]}, {"no": 3, "name": "이용욱", "role": "부매니저", "note": "SUBMANAGER", "attendance": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false]}, {"no": 4, "name": "김도희", "role": "알바", "note": "", "attendance": [false, false, false, false, false, true, true, false, true, true, false, false, false, false, false, false, false]}, {"no": 5, "name": "김유민", "role": "알바", "note": "", "attendance": [false, false, false, false, true, true, true, true, true, true, true, true, false, true, true, true, false]}, {"no": 6, "name": "김초림", "role": "알바", "note": "주말", "attendance": [false, false, true, true, false, false, false, false, true, true, false, false, true, false, true, true, false]}, {"no": 7, "name": "방승연", "role": "알바", "note": "주말", "attendance": [false, false, true, true, false, true, false, false, true, false, false, true, true, false, false, false, false]}, {"no": 8, "name": "방승주", "role": "알바", "note": "단기", "attendance": [false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"no": 9, "name": "최유정", "role": "알바", "note": "", "attendance": [true, true, true, true, false, true, false, false, true, true, false, true, true, false, true, true, false]}, {"no": 10, "name": "최유진", "role": "알바", "note": "", "attendance": [true, true, true, true, false, true, true, false, true, true, false, true, true, false, false, false, false]}, {"no": 11, "name": "임승희", "role": "알바", "note": "", "attendance": [false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, true, false]}, {"no": 12, "name": "윤이나", "role": "알바", "note": "금토일", "attendance": [false, false, false, false, true, true, true, true, true, true, true, true, true, false, false, false, false]}, {"no": 13, "name": "이아진", "role": "알바", "note": "언어능력자", "attendance": [false, false, false, false, true, false, true, true, true, true, false, true, true, true, true, true, false]}, {"no": 14, "name": "박지은", "role": "알바", "note": "", "attendance": [false, false, false, false, true, true, true, true, true, true, false, false, false, false, true, true, false]}, {"no": 15, "name": "정문경", "role": "알바", "note": "신규 / 언어능력자", "attendance": [true, true, false, true, false, true, true, true, true, true, true, true, true, true, true, true, false]}, {"no": 16, "name": "박채은", "role": "알바", "note": "단기", "attendance": [false, false, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false]}, {"no": 17, "name": "이은서", "role": "알바", "note": "단기", "attendance": [false, false, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false]}, {"no": 18, "name": "박지인", "role": "알바", "note": "신규 / 언어능력자", "attendance": [false, true, true, true, false, true, true, false, true, true, false, true, true, false, true, true, false]}, {"no": 19, "name": "성나현", "role": "알바", "note": "신규", "attendance": [false, false, true, true, false, true, true, false, true, true, false, true, true, true, true, true, false]}, {"no": 20, "name": "박진서", "role": "알바", "note": "", "attendance": [true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false]}, {"no": 21, "name": "김다은", "role": "알바", "note": "", "attendance": [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"no": 22, "name": "이자이", "role": "알바", "note": "", "attendance": [false, false, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false]}, {"no": 23, "name": "이여명", "role": "알바", "note": "", "attendance": [true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"no": 24, "name": "정진수", "role": "알바", "note": "", "attendance": [false, false, true, true, false, false, true, false, false, false, false, false, false, false, false, false, false]}, {"no": 25, "name": "안성용", "role": "알바", "note": "", "attendance": [false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"no": 26, "name": "양연경", "role": "알바", "note": "", "attendance": [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"no": 27, "name": "강민", "role": "알바", "note": "", "attendance": [false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false]}]};

/* ============ Default role rate presets (from 일급표 tab) ============ */
function defaultRoles() {
  return [
    { id: uid(), name: "매니저",   dailyRate: 150000, hourlyRate: 17647, standardHours: 8, eventStandardHours: 8.5, holidayBonus: 85000, otRate: 17647 },
    { id: uid(), name: "부매니저", dailyRate: 140000, hourlyRate: 16471, standardHours: 8, eventStandardHours: 8.5, holidayBonus: 80000, otRate: 16471 },
    { id: uid(), name: "스태프",   dailyRate: 120000, hourlyRate: 14120, standardHours: 8, eventStandardHours: 8.5, holidayBonus: 60000, otRate: 14120 },
  ];
}

let uidCounter = 1;
function uid() { return "id" + (uidCounter++) + "_" + Math.floor(Math.random()*1e6); }

function blankEvent(name) {
  return {
    id: uid(),
    name: name || "새 프로젝트",
    memo: "",
    roles: defaultRoles(),
    dates: [],
    staff: [],
    contractAmount: 0, // 클라이언트와 계약한 계약금액 — ⑤탭에서 입력, 인건비 마진율 계산에 쓰임
  };
}

let state = {
  events: [ blankEvent("새 프로젝트 1") ],
  activeEventId: null,
};
state.activeEventId = state.events[0].id;

function activeEvent() {
  return state.events.find(e => e.id === state.activeEventId) || state.events[0];
}

/* ============ persistence: auto-save to this browser's localStorage ============
   이 앱은 여전히 서버가 없는 순수 클라이언트 도구지만, "새로고침하면 다 날아간다"는
   불편을 없애기 위해 상태 전체(state)를 이 브라우저의 localStorage에 자동으로
   저장/복원한다. 어디까지나 "이 브라우저 + 이 기기"에만 남는 저장이라, 다른 사람과
   공유하거나 다른 기기로 옮기려면 기존처럼 Excel 내보내기/불러오기나
   "실시간 공동편집(JSONBin)" 기능을 그대로 써야 한다. */
const AUTOSAVE_KEY = "sweetspot_schedule_payroll_state_v1";
let autoSaveTimer = null;
function setAutoSaveStatus(text) {
  const el = document.getElementById("autoSaveStatus");
  if (el) el.textContent = text;
}
function saveStateToLocalStorage() {
  try {
    localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(state));
    const now = new Date().toLocaleTimeString("ko-KR", { hour12: false });
    setAutoSaveStatus("· 자동 저장됨 (" + now + ")");
  } catch (err) {
    setAutoSaveStatus("· 자동 저장 실패 — 이 브라우저의 저장공간을 확인해주세요 (" + err.message + ")");
  }
}
function scheduleAutoSave() {
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(saveStateToLocalStorage, 400);
}
/* 페이지를 열 때 이전에 자동 저장된 내용이 있으면 그걸로 복원한다. 저장된 게 없거나
   형태가 이상하면(옛 버전, 손상 등) 조용히 무시하고 위에서 만든 기본 상태를 그대로 쓴다. */
function loadStateFromLocalStorage() {
  try {
    const raw = localStorage.getItem(AUTOSAVE_KEY);
    if (!raw) return false;
    const loaded = JSON.parse(raw);
    if (!loaded || !Array.isArray(loaded.events) || loaded.events.length === 0) return false;
    state = loaded;
    if (!state.activeEventId || !state.events.some(e => e.id === state.activeEventId)) {
      state.activeEventId = state.events[0].id;
    }
    setAutoSaveStatus("· 이전에 저장된 내용을 불러왔습니다");
    return true;
  } catch (err) {
    console.warn("자동 저장된 데이터를 불러오지 못했습니다:", err);
    return false;
  }
}
loadStateFromLocalStorage();

/* ============ persistence: manual export/import (Excel / cloud sync) ============ */
function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime || "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ============ date helpers ============ */
/* Date "유형" (type) options. "event" is the only type paid via the daily rate
   (행사일 일급) — every other type (사전준비일/행사철수일/물류입고일) is paid the same
   way, via 사전준비 시급 × 기준시간, so calcStaffPay only ever branches on
   `d.type === "event"` and treats every other value as the hourly "prep" bucket.
   Adding a new date type here needs no changes to the pay calculation itself. */
const DATE_TYPES = [
  { value: "event", label: "행사일" },
  { value: "prep", label: "사전준비일" },
  { value: "teardown", label: "행사철수일" },
  { value: "logistics", label: "물류입고일" },
];
function dateTypeLabel(type) {
  const found = DATE_TYPES.find(t => t.value === type);
  return found ? found.label : "사전준비일";
}
/* Reverse-match an Excel header2 cell (e.g. "행사철수일 (공휴일)") back to a type value.
   Order doesn't matter here — none of the four Korean labels is a prefix of another. */
function parseDateTypeLabel(raw) {
  const s = String(raw || "");
  const found = DATE_TYPES.find(t => s.indexOf(t.label) === 0);
  return found ? found.value : "prep";
}

const DOW_KR = ["일","월","화","수","목","금","토"];
function dowOf(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return DOW_KR[d.getDay()];
}
function fmtDate(dateStr) {
  const [y,m,d] = dateStr.split("-");
  return `${y.slice(2)}.${m}.${d}`;
}
/* Local-calendar-date ISO string. NOTE: Date#toISOString() converts to UTC first, which
   silently shifts the date back a day for anyone west of UTC (e.g. all of Korea, UTC+9,
   whenever local time is before 09:00) — always build YYYY-MM-DD from the local
   getFullYear/getMonth/getDate fields instead. */
function localIso(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function isWeekendDow(dow) { return dow === "토" || dow === "일"; }
function money(n) {
  n = Math.round(n || 0);
  return n.toLocaleString("ko-KR") + "원";
}
/* 최종 원 단위 반올림: 5원 단위로 반올림해 끝자리가 항상 0 또는 5로 끝나도록 한다. */
function roundToNearest5(n) {
  return Math.round((n || 0) / 5) * 5;
}

/* ============ rendering: tabs ============ */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
    if (btn.dataset.tab === "result") renderResults();
    else if (btn.dataset.tab === "otdetail") renderOtDetailTab();
  });
});

/* ============ theme toggle ============ */
document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const cur = root.getAttribute("data-theme");
  if (cur === "dark") root.setAttribute("data-theme", "light");
  else if (cur === "light") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", "dark");
});

/* ============ event select / add / dup / delete ============ */
function renderEventSelect() {
  const sel = document.getElementById("eventSelect");
  sel.innerHTML = "";
  state.events.forEach(ev => {
    const opt = document.createElement("option");
    opt.value = ev.id; opt.textContent = ev.name;
    if (ev.id === state.activeEventId) opt.selected = true;
    sel.appendChild(opt);
  });
  document.getElementById("eventSubtitle").textContent =
    `${state.events.length}개 프로젝트 중 "${activeEvent().name}" 편집 중`;
}
document.getElementById("eventSelect").addEventListener("change", (e) => {
  state.activeEventId = e.target.value;
  renderAll();
});
document.getElementById("addEventBtn").addEventListener("click", () => {
  const ev = blankEvent("새 프로젝트 " + (state.events.length + 1));
  state.events.push(ev);
  state.activeEventId = ev.id;
  renderAll();
});
document.getElementById("dupEventBtn").addEventListener("click", () => {
  const src = activeEvent();
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = uid(); copy.name = src.name + " (복사본)";
  copy.roles.forEach(r => r.id = uid());
  copy.staff.forEach(s => s.id = uid());
  state.events.push(copy);
  state.activeEventId = copy.id;
  renderAll();
});
document.getElementById("delEventBtn").addEventListener("click", () => {
  if (state.events.length <= 1) { alert("최소 1개의 프로젝트는 남아있어야 합니다."); return; }
  if (!confirm(`"${activeEvent().name}" 프로젝트를 삭제할까요?`)) return;
  state.events = state.events.filter(e => e.id !== state.activeEventId);
  state.activeEventId = state.events[0].id;
  renderAll();
});

/* ============ TAB 1: roles ============ */
function renderRolesTable() {
  const ev = activeEvent();
  document.getElementById("eventName").value = ev.name;
  document.getElementById("eventMemo").value = ev.memo || "";
  const tbody = document.querySelector("#rolesTable tbody");
  tbody.innerHTML = "";
  const colors = ["--series-1","--series-2","--series-3","--series-4"];
  ev.roles.forEach((role, i) => {
    const tr = document.createElement("tr");
    const swatch = `<span class="role-swatch" style="background:var(${colors[i % colors.length]})"></span>`;
    tr.innerHTML = `
      <td>${swatch}</td>
      <td><input type="text" data-field="name" value="${escapeAttr(role.name)}"></td>
      <td><input type="number" data-field="dailyRate" value="${role.dailyRate}" class="num"></td>
      <td><input type="number" data-field="eventStandardHours" value="${role.eventStandardHours != null ? role.eventStandardHours : 8}" class="num" step="0.5"></td>
      <td><input type="number" data-field="hourlyRate" value="${role.hourlyRate}" class="num"></td>
      <td><input type="number" data-field="standardHours" value="${role.standardHours}" class="num" step="0.5"></td>
      <td><input type="number" data-field="holidayBonus" value="${role.holidayBonus}" class="num"></td>
      <td><input type="number" data-field="otRate" value="${role.otRate}" class="num"></td>
      <td><button class="danger-text row-del" title="직급 삭제">✕</button></td>
    `;
    tr.querySelectorAll("input").forEach(inp => {
      inp.addEventListener("input", () => {
        const field = inp.dataset.field;
        role[field] = (field === "name") ? inp.value : parseFloat(inp.value || 0);
        renderStaffRoleOptions();
        renderAttTable();
      });
    });
    tr.querySelector(".row-del").addEventListener("click", () => {
      if (ev.staff.some(s => s.roleId === role.id)) {
        if (!confirm("이 직급을 사용 중인 인원이 있습니다. 그래도 삭제할까요? (해당 인원은 직급 미지정 상태가 됩니다)")) return;
      }
      ev.roles = ev.roles.filter(r => r.id !== role.id);
      renderRolesTable(); renderStaffRoleOptions(); renderAttTable();
    });
    tbody.appendChild(tr);
  });
}
document.getElementById("eventName").addEventListener("input", (e) => {
  activeEvent().name = e.target.value || "이름 없음";
  renderEventSelect();
});
document.getElementById("eventMemo").addEventListener("input", (e) => {
  activeEvent().memo = e.target.value;
});
document.getElementById("addRoleBtn").addEventListener("click", () => {
  activeEvent().roles.push({ id: uid(), name: "새 직급", dailyRate: 120000, hourlyRate: 15000, standardHours: 8, eventStandardHours: 8, holidayBonus: 60000, otRate: 15000 });
  renderRolesTable(); renderStaffRoleOptions(); renderAttTable();
});

function escapeAttr(s) {
  return String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
}

/* ============ TAB 2: dates ============ */
document.getElementById("addRangeBtn").addEventListener("click", () => {
  const start = document.getElementById("rangeStart").value;
  const end = document.getElementById("rangeEnd").value;
  const defType = document.getElementById("rangeDefaultType").value;
  if (!start || !end) { alert("시작일과 종료일을 모두 입력하세요."); return; }
  if (start > end) { alert("종료일이 시작일보다 빠릅니다."); return; }
  const ev = activeEvent();
  let cur = new Date(start + "T00:00:00");
  const endD = new Date(end + "T00:00:00");
  while (cur <= endD) {
    const iso = localIso(cur);
    if (!ev.dates.some(d => d.date === iso)) {
      ev.dates.push({ date: iso, type: defType, holiday: false });
    }
    cur.setDate(cur.getDate() + 1);
  }
  ev.dates.sort((a,b) => a.date.localeCompare(b.date));
  renderDatesTable(); renderAttTable();
});
document.getElementById("clearDatesBtn").addEventListener("click", () => {
  if (!confirm("이 프로젝트의 모든 날짜를 삭제할까요? 근태 기록도 함께 사라집니다.")) return;
  activeEvent().dates = [];
  renderDatesTable(); renderAttTable();
});

function renderDatesTable() {
  const ev = activeEvent();
  const tbody = document.querySelector("#datesTable tbody");
  tbody.innerHTML = "";
  if (ev.dates.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5"><div class="empty-note">아직 등록된 날짜가 없습니다. 위에서 기간을 추가해보세요.</div></td></tr>`;
    return;
  }
  ev.dates.forEach(d => {
    const dow = dowOf(d.date);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${fmtDate(d.date)}</td>
      <td style="${isWeekendDow(dow) ? 'color:var(--critical);font-weight:700;' : ''}">${dow}</td>
      <td>
        <select data-field="type">
          ${DATE_TYPES.map(t => `<option value="${t.value}" ${d.type===t.value?"selected":""}>${t.label}</option>`).join("")}
        </select>
      </td>
      <td><input type="checkbox" data-field="holiday" ${d.holiday?"checked":""}></td>
      <td><button class="danger-text row-del">✕</button></td>
    `;
    tr.querySelector('select[data-field="type"]').addEventListener("change", (e) => {
      d.type = e.target.value; renderAttTable();
    });
    tr.querySelector('input[data-field="holiday"]').addEventListener("change", (e) => {
      d.holiday = e.target.checked; renderAttTable();
    });
    tr.querySelector(".row-del").addEventListener("click", () => {
      ev.dates = ev.dates.filter(x => x.date !== d.date);
      renderDatesTable(); renderAttTable();
    });
    tbody.appendChild(tr);
  });
}

/* ============ TAB 3: staff & attendance ============ */
function renderStaffRoleOptions() {
  const ev = activeEvent();
  const sel = document.getElementById("newStaffRole");
  sel.innerHTML = ev.roles.map(r => `<option value="${r.id}">${escapeAttr(r.name)}</option>`).join("");
}
document.getElementById("addStaffBtn").addEventListener("click", () => {
  const name = document.getElementById("newStaffName").value.trim();
  if (!name) { alert("이름을 입력하세요."); return; }
  const roleId = document.getElementById("newStaffRole").value;
  const ev = activeEvent();
  ev.staff.push({ id: uid(), name, roleId, note: "", attendance: {}, overtimeByMonth: {}, overtimeByDate: {}, otDetailed: false, extraPayByMonth: {} });
  document.getElementById("newStaffName").value = "";
  renderAttTable();
});

/* Sorted list of distinct "YYYY-MM" months covered by an event's dates. */
function monthsInEvent(ev) {
  const set = new Set(ev.dates.map(d => d.date.slice(0, 7)));
  return Array.from(set).sort();
}
function monthLabel(monthKey) {
  const [y, m] = monthKey.split("-");
  return `${y}.${parseInt(m, 10)}월`;
}
/* When a staff member has per-date overtime detail entered (otDetailed = true),
   the effective monthly OT hours are derived by summing overtimeByDate per month
   instead of trusting the manually-typed overtimeByMonth value. */
function otDetailByMonth(staff) {
  const map = {};
  const byDate = staff.overtimeByDate || {};
  Object.keys(byDate).forEach(date => {
    const m = date.slice(0, 7);
    map[m] = (map[m] || 0) + (byDate[date] || 0);
  });
  return map;
}
function otMapForStaff(staff) {
  return staff.otDetailed ? otDetailByMonth(staff) : (staff.overtimeByMonth || {});
}
function staffOtHours(staff, monthKey) {
  return otMapForStaff(staff)[monthKey] || 0;
}
/* 시급/일급 계산과 무관하게 수동으로 더 지급할 금액(원) — 월별로 입력. */
function staffExtraPay(staff, monthKey) {
  return (staff.extraPayByMonth || {})[monthKey] || 0;
}

// Drag-paint state for the attendance grid: null when not dragging, otherwise
// { value: true|false } -- the on/off state the drag started with, so every cell the
// mouse enters while the button is held gets painted to the SAME value as the first click.
let attDragging = null;
// One-time global listener: ends a drag-paint gesture wherever the mouse button is released,
// even if that happens outside the table (e.g. user drags past the grid edge). Registered once
// at load time rather than inside renderAttTable(), which re-runs on every render.
document.addEventListener("mouseup", () => {
  attDragging = null;
  document.querySelectorAll("table.att").forEach(t => t.classList.remove("att-painting"));
});

function renderAttTable() {
  const ev = activeEvent();
  const table = document.getElementById("attTable");
  if (ev.dates.length === 0 || ev.staff.length === 0) {
    table.innerHTML = `<tr><td><div class="empty-note">${ev.dates.length===0 ? "먼저 ②탭에서 근무일을 등록하세요." : "먼저 인원을 추가하세요."}</div></td></tr>`;
    return;
  }
  const months = monthsInEvent(ev);
  let thead = "<thead><tr><th class='name-col'>이름</th><th>직급</th>";
  ev.dates.forEach(d => {
    const dow = dowOf(d.date);
    thead += `<th class="${isWeekendDow(dow) ? 'dow-r' : ''}">${fmtDate(d.date)}<br><span style="font-weight:400;">${dow}${d.holiday ? " 🔴" : ""}</span><br><button type="button" class="col-toggle-btn" data-date="${d.date}" title="이 날짜, 전체 인원 출근/휴무 한번에 전환">전체</button></th>`;
  });
  months.forEach(m => { thead += `<th>연장(h)<br><span style="font-weight:400;">${monthLabel(m)}</span></th>`; });
  months.forEach(m => { thead += `<th>추가 지급(원)<br><span style="font-weight:400;">${monthLabel(m)}</span></th>`; });
  thead += "<th>연장 상세</th>";
  thead += "</tr></thead>";

  let tbody = "<tbody>";
  ev.staff.forEach(s => {
    tbody += `<tr data-staff="${s.id}"><td class="name-col">${escapeAttr(s.name)} <button class="row-del icon-btn" style="padding:2px 6px;" title="삭제">✕</button><button type="button" class="row-toggle-btn" data-staff="${s.id}" title="이 인원, 전체 근무일 출근/휴무 한번에 전환">전체</button></td>`;
    tbody += `<td><select data-role-select>${ev.roles.map(r => `<option value="${r.id}" ${r.id===s.roleId?"selected":""}>${escapeAttr(r.name)}</option>`).join("")}</select></td>`;
    ev.dates.forEach(d => {
      const on = !!s.attendance[d.date];
      tbody += `<td><button class="cell-btn ${on?"on":""}" data-date="${d.date}">${on?"✓":"·"}</button></td>`;
    });
    months.forEach(m => {
      const dis = s.otDetailed ? "disabled" : "";
      tbody += `<td><input type="number" class="num" data-ot-month="${m}" value="${staffOtHours(s, m)}" style="width:64px;" ${dis} title="${s.otDetailed ? "상세 입력 값에서 자동 합산됩니다. 수정하려면 \'연장 상세\' 버튼을 사용하세요." : ""}"></td>`;
    });
    months.forEach(m => {
      tbody += `<td><input type="number" class="num" data-extra-month="${m}" value="${staffExtraPay(s, m)}" style="width:76px;" placeholder="0" title="시급/일급 계산과 무관하게 이 달에 별도로 더 지급할 금액(원)"></td>`;
    });
    tbody += `<td><button class="icon-btn ot-detail-btn" data-detail="${s.id}" style="white-space:nowrap;">${s.otDetailed ? "✓ 상세입력됨 →" : "④ 탭에서 입력 →"}</button></td>`;
    tbody += `</tr>`;
  });
  tbody += "</tbody>";
  table.innerHTML = thead + tbody;

  function paintCell(btn, staff, date, value) {
    staff.attendance[date] = value;
    btn.classList.toggle("on", value);
    btn.textContent = value ? "✓" : "·";
  }

  table.querySelectorAll("tr[data-staff]").forEach(tr => {
    const sid = tr.dataset.staff;
    const staff = ev.staff.find(x => x.id === sid);
    tr.querySelectorAll(".cell-btn").forEach(btn => {
      // mousedown (not click) so the same gesture both toggles a single cell AND starts a
      // click-and-drag "paint" across a range, like dragging to fill a block in a spreadsheet.
      btn.addEventListener("mousedown", (e) => {
        e.preventDefault();
        const date = btn.dataset.date;
        const newVal = !staff.attendance[date];
        paintCell(btn, staff, date, newVal);
        attDragging = { value: newVal };
        table.classList.add("att-painting");
      });
      btn.addEventListener("mouseenter", () => {
        if (!attDragging) return;
        paintCell(btn, staff, btn.dataset.date, attDragging.value);
      });
    });
    tr.querySelectorAll("[data-ot-month]").forEach(inp => {
      inp.addEventListener("input", (e) => {
        if (!staff.overtimeByMonth) staff.overtimeByMonth = {};
        staff.overtimeByMonth[inp.dataset.otMonth] = parseFloat(e.target.value || 0);
      });
    });
    tr.querySelectorAll("[data-extra-month]").forEach(inp => {
      inp.addEventListener("input", (e) => {
        if (!staff.extraPayByMonth) staff.extraPayByMonth = {};
        staff.extraPayByMonth[inp.dataset.extraMonth] = parseFloat(e.target.value || 0);
        renderResults();
      });
    });
    tr.querySelector("[data-role-select]").addEventListener("change", (e) => {
      staff.roleId = e.target.value;
    });
    tr.querySelector(".row-del").addEventListener("click", () => {
      ev.staff = ev.staff.filter(x => x.id !== sid);
      renderAttTable();
    });
    tr.querySelector(".ot-detail-btn").addEventListener("click", () => {
      otDetailStaffId = sid;
      document.querySelector('.tab-btn[data-tab="otdetail"]').click();
    });
    // "전체" on a name row: if this person is already checked in on every date, uncheck all;
    // otherwise check them in everywhere. One click to fill a fully-working roster row.
    tr.querySelector(".row-toggle-btn").addEventListener("click", () => {
      const allOn = ev.dates.every(d => !!staff.attendance[d.date]);
      const newVal = !allOn;
      ev.dates.forEach(d => { staff.attendance[d.date] = newVal; });
      renderAttTable();
    });
  });

  // "전체" under a date header: same idea, but down the column -- checks/unchecks everyone for
  // that one date at once (e.g. "everyone worked opening day").
  table.querySelectorAll(".col-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const date = btn.dataset.date;
      const allOn = ev.staff.every(s => !!s.attendance[date]);
      const newVal = !allOn;
      ev.staff.forEach(s => { s.attendance[date] = newVal; });
      renderAttTable();
    });
  });
}

/* ============ TAB 4: per-date overtime detail ============ */
/* Its own tab (not a modal/popup) so it can sit open right next to ③ 인원 & 근태.
   Inputs bind straight to state on "input", same immediate-apply pattern as the
   attendance toggles and monthly OT fields elsewhere in the app — no explicit save step. */
let otDetailStaffId = null;

function renderOtDetailTab() {
  const ev = activeEvent();
  const select = document.getElementById("otDetailStaffSelect");
  const emptyBox = document.getElementById("otDetailEmpty");
  const card = document.getElementById("otDetailCard");

  if (ev.staff.length === 0) {
    select.innerHTML = "";
    emptyBox.style.display = "";
    card.style.display = "none";
    return;
  }
  emptyBox.style.display = "none";

  if (!otDetailStaffId || !ev.staff.find(s => s.id === otDetailStaffId)) {
    otDetailStaffId = ev.staff[0].id;
  }
  select.innerHTML = ev.staff.map(s =>
    `<option value="${s.id}" ${s.id === otDetailStaffId ? "selected" : ""}>${escapeAttr(s.name)}${s.otDetailed ? " (상세입력됨)" : ""}</option>`
  ).join("");

  renderOtDetailBody();
}

function renderOtDetailBody() {
  const ev = activeEvent();
  const staff = ev.staff.find(s => s.id === otDetailStaffId);
  const card = document.getElementById("otDetailCard");
  if (!staff) { card.style.display = "none"; return; }
  card.style.display = "";

  const role = ev.roles.find(r => r.id === staff.roleId);
  document.getElementById("otDetailTitle").textContent = `${staff.name} — 근무일별 연장근무 · 단축근무 입력`;

  // 월별 추가 지급액(원) — ③탭의 같은 항목과 완전히 같은 데이터(staff.extraPayByMonth)를
  // 여기서도 바로 입력할 수 있게 보여준다. 시급/일급 계산과 무관한 수동 지급액이라
  // 날짜별 표가 아닌, 월 단위 입력 칸으로 별도 배치한다.
  const extraPayWrap = document.getElementById("otDetailExtraPayWrap");
  const monthsForExtra = monthsInEvent(ev);
  if (monthsForExtra.length === 0) {
    extraPayWrap.innerHTML = "";
  } else {
    extraPayWrap.innerHTML = `<div style="font-weight:600; font-size:13px; margin-bottom:6px;">월별 추가 지급(원)</div>
      <div style="display:flex; flex-wrap:wrap; gap:12px;">
        ${monthsForExtra.map(m => `
          <label class="field" style="max-width:160px; margin:0;">${monthLabel(m)}
            <input type="number" class="num" data-extra-detail-month="${m}" value="${staffExtraPay(staff, m)}" placeholder="0">
          </label>
        `).join("")}
      </div>`;
    extraPayWrap.querySelectorAll("[data-extra-detail-month]").forEach(inp => {
      inp.addEventListener("input", (e) => {
        if (!staff.extraPayByMonth) staff.extraPayByMonth = {};
        staff.extraPayByMonth[inp.dataset.extraDetailMonth] = parseFloat(e.target.value || 0);
        renderAttTable(); // keep ③탭의 "추가 지급(원)" 칸도 함께 최신 값으로 갱신
        renderResults();
      });
    });
  }

  const byDate = staff.overtimeByDate || {};
  const earlyByDate = staff.earlyLeaveByDate || {};
  const table = document.getElementById("otDetailTable");
  if (ev.dates.length === 0) {
    table.innerHTML = `<tr><td><div class="empty-note">먼저 ②탭에서 근무일을 등록하세요.</div></td></tr>`;
  } else {
    let html = "<thead><tr><th>날짜</th><th>요일</th><th class=\"num\">연장(h)</th><th class=\"num\">단축근무 부족(h)</th></tr></thead><tbody>";
    ev.dates.forEach(d => {
      const dow = dowOf(d.date);
      const otVal = byDate[d.date] || 0;
      // 그날 유형(행사일/그 외)에 맞는 기준시간을 구해, 저장된 실근무시간을
      // 화면에는 "기준 대비 부족한 시간(음수)"으로 환산해 보여준다.
      const stdH = !role ? 8 : (d.type === "event" ? (role.eventStandardHours || 8) : (role.standardHours || 8));
      const earlyActual = earlyByDate[d.date];
      const deficitVal = earlyActual != null ? Math.round((earlyActual - stdH) * 100) / 100 : "";
      html += `<tr>
        <td>${fmtDate(d.date)}${d.holiday ? " 🔴" : ""}</td>
        <td class="${isWeekendDow(dow) ? 'dow-r' : ''}">${dow}</td>
        <td class="num"><input type="number" class="num" min="0" step="0.5" data-ot-date="${d.date}" value="${otVal}" style="width:76px;"></td>
        <td class="num"><input type="number" class="num" max="0" step="0.5" data-early-date="${d.date}" data-std-hours="${stdH}" value="${deficitVal}" placeholder="정상" style="width:76px;"></td>
      </tr>`;
    });
    html += "</tbody>";
    table.innerHTML = html;
    table.querySelectorAll("[data-ot-date]").forEach(inp => {
      inp.addEventListener("input", (e) => {
        const v = parseFloat(e.target.value || 0) || 0;
        if (!staff.overtimeByDate) staff.overtimeByDate = {};
        if (v > 0) staff.overtimeByDate[inp.dataset.otDate] = v;
        else delete staff.overtimeByDate[inp.dataset.otDate];
        staff.otDetailed = true; // entering per-date OT detail switches this staff member into detailed mode
        updateOtDetailSummary(staff);
        renderAttTable();
        renderResults();
      });
    });
    table.querySelectorAll("[data-early-date]").forEach(inp => {
      inp.addEventListener("input", (e) => {
        const raw = e.target.value;
        if (!staff.earlyLeaveByDate) staff.earlyLeaveByDate = {};
        if (raw === "") {
          delete staff.earlyLeaveByDate[inp.dataset.earlyDate]; // blank = worked the full standard day
        } else {
          const parsed = parseFloat(raw);
          if (!isNaN(parsed)) {
            const deficit = Math.min(0, parsed); // 부족시간은 0 이하만 허용 (양수 입력은 0으로 취급)
            const stdH = parseFloat(inp.dataset.stdHours) || 8;
            const actual = Math.max(0, stdH + deficit); // 기준시간 + 부족시간(음수) = 실근무시간
            staff.earlyLeaveByDate[inp.dataset.earlyDate] = actual;
          }
        }
        updateOtDetailSummary(staff);
        renderResults();
      });
    });
  }
  updateOtDetailSummary(staff);
}

function updateOtDetailSummary(staff) {
  const map = otDetailByMonth(staff);
  const months = Object.keys(map).sort();
  const otPart = months.length
    ? "연장 월별 합계 — " + months.map(m => `${monthLabel(m)}: ${map[m]}h`).join("  ·  ")
    : "연장 월별 합계 — 입력된 연장근무 없음";
  const earlyMap = staff.earlyLeaveByDate || {};
  const earlyCount = Object.keys(earlyMap).length;
  const earlyPart = earlyCount > 0
    ? `단축근무 반영된 날짜 ${earlyCount}건 (해당 날짜만 실근무시간 기준으로 비례 계산)`
    : "단축근무 입력 없음 (모든 근무일을 기준시간 그대로 계산)";
  const summaryEl = document.getElementById("otDetailSummary");
  summaryEl.innerHTML = `${escapeAttr(otPart)}<br>${escapeAttr(earlyPart)}`;
}

document.getElementById("otDetailStaffSelect").addEventListener("change", (e) => {
  otDetailStaffId = e.target.value;
  renderOtDetailBody();
});
document.getElementById("otDetailResetBtn").addEventListener("click", () => {
  const ev = activeEvent();
  const staff = ev.staff.find(s => s.id === otDetailStaffId);
  if (!staff) return;
  if (!confirm("이 인원의 일자별 연장근무 상세와 단축근무(실근무시간) 입력을 모두 지우고, 연장은 월별 직접 입력 방식으로, 단축근무는 전부 기준시간 그대로(정상 근무)로 되돌릴까요?")) return;
  staff.overtimeByDate = {};
  staff.otDetailed = false;
  staff.earlyLeaveByDate = {};
  renderOtDetailBody();
  renderAttTable();
  renderResults();
});

/* ============ calculation ============ */
/* monthFilter: null/"" = whole event; "YYYY-MM" = that month only */
function calcStaffPay(ev, staff, monthFilter) {
  const role = ev.roles.find(r => r.id === staff.roleId);
  const earlyMap = staff.earlyLeaveByDate || {};
  let eventDays = 0, prepDays = 0, holidayDays = 0;
  let eventPayRaw = 0, prepPayRaw = 0;
  let earlyLeaveHours = 0, earlyLeaveDeductRaw = 0;
  ev.dates.forEach(d => {
    if (monthFilter && d.date.slice(0, 7) !== monthFilter) return;
    if (!staff.attendance[d.date]) return;
    if (d.type === "event") eventDays++; else prepDays++;
    if (d.holiday) holidayDays++;
    if (!role) return;
    // A date present in earlyLeaveByDate means this staff member left early that day —
    // pay for just that date is prorated off the actual hours worked instead of a full
    // standard day. Any date absent from the map (the normal case) is paid in full, exactly
    // as before this feature existed.
    const earlyHours = earlyMap[d.date];
    if (d.type === "event") {
      const stdH = role.eventStandardHours || 8;
      if (earlyHours != null) {
        const prorated = stdH > 0 ? (role.dailyRate / stdH) * earlyHours : 0;
        eventPayRaw += prorated;
        // 단축근무로 인해 못 채운 시간·금액 (실근무가 기준시간보다 짧을 때만 "차감"으로 집계)
        if (earlyHours < stdH) {
          earlyLeaveHours += stdH - earlyHours;
          earlyLeaveDeductRaw += role.dailyRate - prorated;
        }
      } else {
        eventPayRaw += role.dailyRate;
      }
    } else {
      if (earlyHours != null) {
        const prorated = role.hourlyRate * earlyHours;
        prepPayRaw += prorated;
        if (earlyHours < role.standardHours) {
          earlyLeaveHours += role.standardHours - earlyHours;
          earlyLeaveDeductRaw += (role.hourlyRate * role.standardHours) - prorated;
        }
      } else {
        prepPayRaw += role.hourlyRate * role.standardHours;
      }
    }
  });
  const totalDays = eventDays + prepDays;
  const otMap = otMapForStaff(staff);
  const otHours = monthFilter
    ? (otMap[monthFilter] || 0)
    : Object.values(otMap).reduce((sum, v) => sum + (v || 0), 0);
  // 추가 지급액: 시급/일급 계산과 무관하게 직급 유무와 상관없이 그대로 더해지는 수동 입력 금액.
  const extraMap = staff.extraPayByMonth || {};
  const extraPayRaw = monthFilter
    ? (extraMap[monthFilter] || 0)
    : Object.values(extraMap).reduce((sum, v) => sum + (v || 0), 0);
  const extraPay = roundToNearest5(extraPayRaw);
  if (!role) {
    return { eventDays, prepDays, holidayDays, totalDays, prepPay: 0, eventPay: 0, basePay: 0, holidayPay: 0, otHours, otPay: 0, earlyLeaveHours: 0, earlyLeaveDeduct: 0, extraPay, total: extraPay, roleName: "(직급 없음)" };
  }
  // Each pay component is rounded to the nearest 5 won first (so every amount that
  // reaches the screen, Excel export, or PDF ends in 0 or 5), then summed — this keeps
  // 평일/주말/공휴일/연장 항목을 더하면 항상 예상 지급액과 정확히 맞아떨어진다.
  const prepPay = roundToNearest5(prepPayRaw);
  const eventPay = roundToNearest5(eventPayRaw);
  const basePay = prepPay + eventPay;
  const holidayPay = roundToNearest5(holidayDays * role.holidayBonus);
  const otPay = roundToNearest5(otHours * role.otRate);
  // earlyLeaveDeduct는 이미 기본급(prepPay/eventPay)에 반영되어 있는 차감액을 그대로
  // "정보 표시용"으로 다시 계산한 값입니다 — 최종 지급액에 추가로 빼는 것이 아니라,
  // 단축근무로 얼마가 덜 지급됐는지 보여주기 위한 참고 항목입니다.
  const earlyLeaveDeduct = roundToNearest5(Math.max(0, earlyLeaveDeductRaw));
  const total = basePay + holidayPay + otPay + extraPay;
  return { eventDays, prepDays, holidayDays, totalDays, prepPay, eventPay, basePay, holidayPay, otHours, otPay, earlyLeaveHours, earlyLeaveDeduct, extraPay, total, roleName: role.name };
}

/* ============ TAB 4: results ============ */
let currentResultMonth = ""; // "" = whole event; otherwise "YYYY-MM"

function renderResults(monthOverride) {
  if (monthOverride !== undefined) currentResultMonth = monthOverride;
  const ev = activeEvent();
  const container = document.getElementById("resultContent");
  if (ev.staff.length === 0) {
    container.innerHTML = `<div class="empty-note">아직 인원이 없습니다. ③ 탭에서 인원을 추가하고 근태를 체크해주세요.</div>`;
    return;
  }

  const months = monthsInEvent(ev);
  if (currentResultMonth && months.indexOf(currentResultMonth) === -1) currentResultMonth = "";
  const monthFilter = currentResultMonth || null;

  let allRows = ev.staff.map(s => ({ staff: s, calc: calcStaffPay(ev, s, monthFilter) }));
  // when viewing a single month, hide people with nothing to pay that month (nobody worked / no OT)
  const rows = monthFilter ? allRows.filter(r => r.calc.totalDays > 0 || r.calc.otHours > 0) : allRows;

  const totalPayroll = rows.reduce((sum, r) => sum + r.calc.total, 0);
  const totalDays = rows.reduce((sum, r) => sum + r.calc.totalDays, 0);
  const avgPay = rows.length ? roundToNearest5(totalPayroll / rows.length) : 0;

  // 인건비 마진율: 프로젝트 전체(월 필터와 무관하게) 계약금액 대비 인건비 총액.
  // 특정 달만 보고 있어도 계약금액은 프로젝트 하나에 한 개뿐이라, 항상 "프로젝트 전체 인건비"와
  // 비교한다 — 그렇지 않으면 한 달치 인건비만으로 마진율을 잘못 계산하게 된다.
  const fullTotalPayroll = ev.staff.reduce((sum, s) => sum + calcStaffPay(ev, s, null).total, 0);
  const contractAmount = ev.contractAmount || 0;
  const marginAmount = contractAmount - fullTotalPayroll;
  const marginRate = contractAmount > 0 ? (marginAmount / contractAmount) * 100 : null;

  // by-role totals for chart, in role definition order (categorical hue order)
  const colors = ["--series-1","--series-2","--series-3","--series-4"];
  const byRole = ev.roles.map((role, i) => {
    const sum = rows.filter(r => r.staff.roleId === role.id).reduce((s,r) => s + r.calc.total, 0);
    return { name: role.name, sum, color: colors[i % colors.length] };
  }).filter(r => r.sum > 0);
  const maxRoleSum = Math.max(1, ...byRole.map(r => r.sum));

  let html = "";

  if (months.length > 1) {
    html += `<div class="toolbar" style="margin-bottom:14px;">
      <label class="field" style="margin:0;">기간
        <select id="resultMonthSelect">
          <option value="" ${!currentResultMonth ? "selected" : ""}>전체 기간 (${months.map(monthLabel).join(" + ")})</option>
          ${months.map(m => `<option value="${m}" ${currentResultMonth===m ? "selected" : ""}>${monthLabel(m)}만 보기</option>`).join("")}
        </select>
      </label>
    </div>`;
  }

  html += `<div class="stat-row">
    <div class="stat-tile"><div class="label">${monthFilter ? monthLabel(monthFilter) + " 인원" : "총 인원"}</div><div class="value">${rows.length}명</div></div>
    <div class="stat-tile"><div class="label">${monthFilter ? monthLabel(monthFilter) + " 근무일수" : "총 근무일수"}</div><div class="value">${totalDays}일</div></div>
    <div class="stat-tile"><div class="label">${monthFilter ? monthLabel(monthFilter) + " 인건비" : "총 인건비"}</div><div class="value small">${money(totalPayroll)}</div></div>
    <div class="stat-tile"><div class="label">1인당 평균 지급액</div><div class="value small">${money(avgPay)}</div></div>
  </div>`;

  html += `<div class="card">
    <h2>인건비 마진율</h2>
    <p class="hint">클라이언트와 계약한 계약금액을 입력하면, 이 프로젝트 전체 인건비(월 필터와 무관하게 항상 전체 기준) 대비 마진을 자동으로 계산해요.</p>
    <label class="field" style="max-width:280px;">계약금액(원)
      <input type="number" id="contractAmountInput" class="num" value="${contractAmount}" placeholder="예: 10000000">
    </label>
    <div class="stat-row" style="margin-top:10px;">
      <div class="stat-tile"><div class="label">계약금액</div><div class="value small">${money(contractAmount)}</div></div>
      <div class="stat-tile"><div class="label">프로젝트 전체 인건비</div><div class="value small">${money(fullTotalPayroll)}</div></div>
      <div class="stat-tile"><div class="label">마진</div><div class="value small" id="marginAmountValue" style="${marginAmount < 0 ? "color:var(--critical);" : ""}">${money(marginAmount)}</div></div>
      <div class="stat-tile"><div class="label">마진율</div><div class="value small" id="marginRateValue" style="${marginRate != null && marginRate < 0 ? "color:var(--critical);" : ""}">${marginRate != null ? marginRate.toFixed(1) + "%" : "계약금액을 입력하세요"}</div></div>
    </div>
  </div>`;

  if (byRole.length > 0) {
    html += `<div class="card"><h2>직급별 인건비${monthFilter ? " — " + monthLabel(monthFilter) : ""}</h2><div class="chart-wrap">`;
    byRole.forEach(r => {
      const pct = Math.round((r.sum / maxRoleSum) * 100);
      html += `<div class="bar-row">
        <div class="bar-label">${escapeAttr(r.name)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:var(${r.color});" title="${escapeAttr(r.name)}: ${money(r.sum)}"></div></div>
        <div class="bar-value">${money(r.sum)}</div>
      </div>`;
    });
    html += `</div></div>`;
  }

  html += `<div class="card"><h2>인원별 급여 상세${monthFilter ? " — " + monthLabel(monthFilter) : ""}</h2>
    <div class="toolbar" style="margin-bottom:10px; flex-wrap:wrap;">
      <button id="bulkLookupPngBtn">🖼 선택 인원 급여조회 일괄 다운로드 (PNG)</button>
      <button id="bulkLookupJpgBtn">🖼 선택 인원 급여조회 일괄 다운로드 (JPG)</button>
    </div>
    <p class="scroll-hint">← 표가 넓으면 좌우로 스크롤해서 나머지 항목을 볼 수 있어요.</p><div class="table-scroll"><table class="data" id="payTable">
    <thead><tr>
      <th style="width:30px;"><input type="checkbox" id="payTableSelectAll" title="전체 선택/해제"></th>
      <th>이름</th><th>직급</th><th class="num">행사일</th><th class="num">사전준비일</th>
      <th class="num">공휴일</th><th class="num">기본급</th><th class="num">공휴일수당</th>
      <th class="num">연장(h)</th><th class="num">연장수당</th>
      <th class="num">단축근무(h)</th><th class="num">단축근무차감액</th>
      <th class="num">추가지급(원)</th><th class="num">최종 지급액</th>
    </tr></thead><tbody>`;
  rows.forEach(r => {
    const hasEarlyLeave = (r.calc.earlyLeaveHours || 0) > 0;
    html += `<tr>
      <td><input type="checkbox" class="pay-select-cb" data-staff-id="${r.staff.id}"></td>
      <td><button class="link-btn" data-lookup-staff="${r.staff.id}">${escapeAttr(r.staff.name)}</button></td>
      <td>${escapeAttr(r.calc.roleName)}</td>
      <td class="num">${r.calc.eventDays}</td>
      <td class="num">${r.calc.prepDays}</td>
      <td class="num">${r.calc.holidayDays}</td>
      <td class="num">${money(r.calc.basePay)}</td>
      <td class="num">${money(r.calc.holidayPay)}</td>
      <td class="num">${r.calc.otHours || 0}</td>
      <td class="num">${money(r.calc.otPay)}</td>
      <td class="num">${r.calc.earlyLeaveHours || 0}</td>
      <td class="num" ${hasEarlyLeave ? 'style="color:var(--critical);"' : ""}>${hasEarlyLeave ? "-" + money(r.calc.earlyLeaveDeduct) : money(0)}</td>
      <td class="num">${money(r.calc.extraPay || 0)}</td>
      <td class="num" style="font-weight:700;">${money(r.calc.total)}</td>
    </tr>`;
  });
  html += `</tbody></table></div><p class="scroll-hint" style="margin-top:8px;">↑ 이름을 누르면 그 인원의 급여 조회 카드를 볼 수 있어요. 체크박스로 여러 명을 선택하면 위 버튼으로 한 번에 이미지(ZIP)로 받을 수 있어요.</p></div>`;

  container.innerHTML = html;

  const monthSelect = document.getElementById("resultMonthSelect");
  if (monthSelect) {
    monthSelect.addEventListener("change", (e) => renderResults(e.target.value));
  }
  // 입력할 때마다 ⑤탭 전체를 다시 그리면 입력칸이 통째로 새로 생겨서 커서/포커스가
  // 튀므로, 마진 관련 두 값만 직접 갱신한다(다른 input들과 같은 패턴).
  const contractInput = document.getElementById("contractAmountInput");
  if (contractInput) {
    contractInput.addEventListener("input", () => {
      ev.contractAmount = parseFloat(contractInput.value || 0) || 0;
      const newMarginAmount = ev.contractAmount - fullTotalPayroll;
      const newMarginRate = ev.contractAmount > 0 ? (newMarginAmount / ev.contractAmount) * 100 : null;
      const marginAmountEl = document.getElementById("marginAmountValue");
      const marginRateEl = document.getElementById("marginRateValue");
      if (marginAmountEl) {
        marginAmountEl.textContent = money(newMarginAmount);
        marginAmountEl.style.color = newMarginAmount < 0 ? "var(--critical)" : "";
      }
      if (marginRateEl) {
        marginRateEl.textContent = newMarginRate != null ? newMarginRate.toFixed(1) + "%" : "계약금액을 입력하세요";
        marginRateEl.style.color = (newMarginRate != null && newMarginRate < 0) ? "var(--critical)" : "";
      }
      scheduleAutoSave();
    });
  }
  container.querySelectorAll("[data-lookup-staff]").forEach(btn => {
    btn.addEventListener("click", () => openPayLookup(btn.dataset.lookupStaff));
  });
  const selectAllCb = document.getElementById("payTableSelectAll");
  if (selectAllCb) {
    selectAllCb.addEventListener("change", () => {
      container.querySelectorAll(".pay-select-cb").forEach(cb => { cb.checked = selectAllCb.checked; });
    });
  }
  const bulkPngBtn = document.getElementById("bulkLookupPngBtn");
  const bulkJpgBtn = document.getElementById("bulkLookupJpgBtn");
  if (bulkPngBtn) bulkPngBtn.addEventListener("click", () => bulkExportPayLookupImages("png"));
  if (bulkJpgBtn) bulkJpgBtn.addEventListener("click", () => bulkExportPayLookupImages("jpg"));
}

/* ============ 개별 급여 조회 카드 (⑤탭 이름 클릭 시) ============ */
/* Read-only formatted payslip-style view for one worker, using only the pay
   categories that already exist in this app (평일/주말/공휴일/연장) — respects
   whichever month is currently selected in ⑤탭. */
function openPayLookup(staffId) {
  const ev = activeEvent();
  const staff = ev.staff.find(s => s.id === staffId);
  if (!staff) return;
  const role = ev.roles.find(r => r.id === staff.roleId);
  const monthFilter = currentResultMonth || null;
  const calc = calcStaffPay(ev, staff, monthFilter);

  let scheduledDays = 0;
  ev.dates.forEach(d => {
    if (monthFilter && d.date.slice(0, 7) !== monthFilter) return;
    scheduledDays++;
  });
  const absentDays = Math.max(0, scheduledDays - calc.totalDays);

  document.getElementById("lkName").textContent = staff.name;
  document.getElementById("lkRole").textContent = calc.roleName;

  const workTotalPay = calc.basePay + calc.holidayPay;
  document.getElementById("lkDaysBody").innerHTML = `
    <tr><td>평일</td><td class="num">${calc.prepDays}</td><td class="num">${money(calc.prepPay)}</td></tr>
    <tr><td>주말</td><td class="num">${calc.eventDays}</td><td class="num">${money(calc.eventPay)}</td></tr>
    <tr><td>공휴일</td><td class="num">${calc.holidayDays}</td><td class="num">${money(calc.holidayPay)}</td></tr>
    <tr class="lookup-total-row"><td>근무 합계</td><td class="num">${calc.totalDays}</td><td class="num">${money(workTotalPay)}</td></tr>
    <tr><td>휴무</td><td class="num">${absentDays}</td><td class="num"></td></tr>
  `;
  const hasEarlyLeave = (calc.earlyLeaveHours || 0) > 0;
  document.getElementById("lkOtBody").innerHTML = `
    <tr><td>연장</td><td class="num">${calc.otHours || 0}</td><td class="num">${money(calc.otPay)}</td></tr>
    <tr><td>단축근무</td><td class="num">${calc.earlyLeaveHours || 0}</td><td class="num" ${hasEarlyLeave ? 'style="color:var(--critical);"' : ""}>${hasEarlyLeave ? "-" + money(calc.earlyLeaveDeduct) : money(0)}</td></tr>
    <tr><td>추가 지급</td><td class="num">-</td><td class="num">${money(calc.extraPay || 0)}</td></tr>
  `;
  document.getElementById("lkFinalLabel").textContent = monthFilter ? `예상 지급액 — ${monthLabel(monthFilter)}` : "예상 지급액";
  document.getElementById("lkFinalAmount").textContent = money(calc.total);

  document.getElementById("payLookupOverlay").classList.add("open");
}
function closePayLookup() {
  document.getElementById("payLookupOverlay").classList.remove("open");
}
document.getElementById("payLookupCloseBtn").addEventListener("click", closePayLookup);
document.getElementById("payLookupOverlay").addEventListener("click", (e) => {
  if (e.target.id === "payLookupOverlay") closePayLookup();
});

/* 급여 조회 카드를 개인별 PNG/JPG 이미지 파일로 저장 */
async function exportPayLookupImage(format) {
  const card = document.querySelector(".lookup-card");
  const actionBtns = card.querySelectorAll(".lookup-title-actions button");
  const staffName = (document.getElementById("lkName").textContent || "근무자").trim();
  const monthSuffix = currentResultMonth ? `_${currentResultMonth}` : "";
  actionBtns.forEach(b => b.disabled = true);
  // hide the action buttons themselves for the capture so they don't appear in the saved image
  actionBtns.forEach(b => b.style.visibility = "hidden");
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  try {
    const bgColor = getComputedStyle(card).backgroundColor || "#ffffff";
    const canvas = await html2canvas(card, { scale: 2, backgroundColor: bgColor });
    const isJpg = format === "jpg";
    const mimeType = isJpg ? "image/jpeg" : "image/png";
    const blob = await new Promise(resolve => canvas.toBlob(resolve, mimeType, isJpg ? 0.95 : undefined));
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `${staffName}_급여조회${monthSuffix}.${isJpg ? "jpg" : "png"}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } catch (err) {
    console.error(err);
    alert("이미지 저장 중 문제가 발생했습니다: " + err.message);
  } finally {
    actionBtns.forEach(b => b.style.visibility = "");
    actionBtns.forEach(b => b.disabled = false);
  }
}
document.getElementById("payLookupPngBtn").addEventListener("click", () => exportPayLookupImage("png"));
document.getElementById("payLookupJpgBtn").addEventListener("click", () => exportPayLookupImage("jpg"));

/* ⑤ 급여 결과 표에서 체크박스로 여러 명을 골라 급여조회 카드 이미지를 한 번에 ZIP으로 다운로드 */
async function bulkExportPayLookupImages(format) {
  const checked = Array.from(document.querySelectorAll(".pay-select-cb:checked"));
  if (checked.length === 0) { alert("먼저 표에서 다운로드할 인원을 체크박스로 선택해주세요."); return; }
  const staffIds = checked.map(cb => cb.dataset.staffId);
  const isJpg = format === "jpg";
  const mimeType = isJpg ? "image/jpeg" : "image/png";
  const ext = isJpg ? "jpg" : "png";
  const btn = document.getElementById(isJpg ? "bulkLookupJpgBtn" : "bulkLookupPngBtn");
  const otherBtn = document.getElementById(isJpg ? "bulkLookupPngBtn" : "bulkLookupJpgBtn");
  const originalText = btn ? btn.textContent : "";
  if (btn) btn.disabled = true;
  if (otherBtn) otherBtn.disabled = true;
  const monthSuffix = currentResultMonth ? `_${currentResultMonth}` : "";
  const usedNames = {};
  try {
    const zip = new JSZip();
    for (let i = 0; i < staffIds.length; i++) {
      if (btn) btn.textContent = `생성 중... (${i + 1}/${staffIds.length})`;
      openPayLookup(staffIds[i]);
      const card = document.querySelector(".lookup-card");
      const actionBtns = card.querySelectorAll(".lookup-title-actions button");
      actionBtns.forEach(b => b.style.visibility = "hidden");
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      const staffName = (document.getElementById("lkName").textContent || `근무자${i + 1}`).trim();
      const bgColor = getComputedStyle(card).backgroundColor || "#ffffff";
      const canvas = await html2canvas(card, { scale: 2, backgroundColor: bgColor });
      const blob = await new Promise(resolve => canvas.toBlob(resolve, mimeType, isJpg ? 0.95 : undefined));
      actionBtns.forEach(b => b.style.visibility = "");
      let fileName = `${staffName}_급여조회${monthSuffix}`;
      if (usedNames[fileName] != null) {
        usedNames[fileName]++;
        fileName += `_${usedNames[fileName]}`;
      } else {
        usedNames[fileName] = 0;
      }
      zip.file(`${fileName}.${ext}`, blob);
    }
    closePayLookup();
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const blobUrl = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = blobUrl;
    const ev = activeEvent();
    a.download = `${(ev && ev.name) ? ev.name : "급여조회"}_일괄다운로드${monthSuffix}.zip`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } catch (err) {
    console.error(err);
    alert("일괄 다운로드 중 문제가 발생했습니다: " + err.message);
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = originalText; }
    if (otherBtn) otherBtn.disabled = false;
  }
}

/* ============ TAB 5: Excel export/import ============ */
const ROLE_HEADER = ["직급명","행사일 일급(원)","행사일 기준시간(h)","사전준비 시급(원)","기준시간(h)","공휴일 수당(원)","연장 시급(원)"];
const OT_COL_PREFIX = "연장(h)_";
const EXTRA_COL_PREFIX = "추가지급(원)_";
const EARLY_COL_PREFIX = "단축근무부족(h)_"; // 날짜별 1열씩, 값은 UI와 동일하게 "기준 대비 부족시간"(음수, 정상근무면 빈 칸)

function sanitizeSheetName(name, used) {
  let base = String(name || "프로젝트").replace(/[\\\/\?\*\[\]:]/g, " ").trim().slice(0, 28) || "프로젝트";
  let candidate = base;
  let n = 2;
  while (used.has(candidate)) { candidate = (base.slice(0, 25) + "_" + n); n++; }
  used.add(candidate);
  return candidate;
}

function buildEventSheetRows(ev) {
  const rows = [];
  rows.push(ROLE_HEADER);
  ev.roles.forEach(r => rows.push([r.name, r.dailyRate, r.eventStandardHours != null ? r.eventStandardHours : 8, r.hourlyRate, r.standardHours, r.holidayBonus, r.otRate]));
  rows.push([]); // blank separator row -> marks end of role table
  // 계약금액(인건비 마진율 계산용) — 이 행이 없는 예전 파일을 불러와도 문제없도록,
  // 읽을 때는 이 라벨로 시작하는 행인지 확인하고 없으면 그냥 건너뛴다(하위 호환).
  rows.push(["계약금액(원)", ev.contractAmount || 0]);
  rows.push([]); // blank separator row

  const months = monthsInEvent(ev);
  // OT hours get one column per month (an event can span several months, each with its own
  // overtime input); everything else is a whole-event total. Both are read back verbatim except
  // OT, which is user-entered and preserved; the rest are recomputed on import.
  // 추가 지급액도 연장(h)과 같은 방식으로 달마다 한 열씩 두어, 사용자가 직접 입력한 값을
  // 그대로 보존한다 (다른 열들은 불러올 때 현재 급여 기준으로 새로 계산됨).
  // 단축근무는 OT/추가지급처럼 달 단위가 아니라 "그 날 얼마나 부족했는지"가 핵심이라, 날짜별로
  // 한 열씩 둔다 (근태 O/X 열과 같은 날짜 집합). 값은 화면과 동일하게 "기준시간 대비 부족시간"
  // (0 이하 숫자)이고, 정상 근무한 날은 빈 칸으로 둔다.
  const summaryHeader = ["행사일수","사전준비일수","공휴일수","기본급","공휴일수당",
    ...months.map(m => OT_COL_PREFIX + m), "연장수당(합계)",
    ...ev.dates.map(d => EARLY_COL_PREFIX + d.date), "단축근무차감액(합계)",
    ...months.map(m => EXTRA_COL_PREFIX + m), "추가지급(합계)","최종지급액(합계)"];

  const header1 = ["이름","직급", ...ev.dates.map(d => d.date), ...summaryHeader];
  const header2 = ["","유형", ...ev.dates.map(d => dateTypeLabel(d.type) + (d.holiday ? " (공휴일)" : "")), ...summaryHeader.map(()=>"")];
  rows.push(header1);
  rows.push(header2);

  ev.staff.forEach(s => {
    const role = ev.roles.find(r => r.id === s.roleId);
    const calc = calcStaffPay(ev, s, null); // whole-event totals
    const attCells = ev.dates.map(d => s.attendance[d.date] ? "O" : "");
    const earlyMap = s.earlyLeaveByDate || {};
    const earlyCells = ev.dates.map(d => {
      const actual = earlyMap[d.date];
      if (actual == null) return "";
      const stdH = !role ? 8 : (d.type === "event" ? (role.eventStandardHours || 8) : (role.standardHours || 8));
      return Math.round((actual - stdH) * 100) / 100;
    });
    rows.push([
      s.name, role ? role.name : "",
      ...attCells,
      calc.eventDays, calc.prepDays, calc.holidayDays, calc.basePay, calc.holidayPay,
      ...months.map(m => staffOtHours(s, m)),
      calc.otPay,
      ...earlyCells,
      calc.earlyLeaveDeduct,
      ...months.map(m => staffExtraPay(s, m)),
      calc.extraPay, calc.total,
    ]);
  });
  return rows;
}

function buildWorkbook() {
  const wb = XLSX.utils.book_new();
  const infoRows = [
    ["근무 스케줄 & 급여 계산 - 데이터 백업 파일"],
    [""],
    ["- 프로젝트별로 시트가 하나씩 있습니다."],
    ["- 각 시트 상단은 직급별 급여 기준표, 그 아래는 날짜별 근태(O 표시)와 급여 계산 결과입니다."],
    ["- '행사일수/사전준비일수/공휴일수/기본급/공휴일수당/연장수당/단축근무차감액(합계)/추가지급(합계)/최종지급액' 열은 자동 계산 값이라 참고용이며,"],
    ["  이 파일을 다시 불러오면 현재 급여 기준으로 새로 계산됩니다. 다만 '연장(h)_YYYY-MM', '단축근무부족(h)_YYYY-MM-DD', '추가지급(원)_YYYY-MM' 열은 직접 입력한 값이라 그대로 불러옵니다."],
    ["  '단축근무부족(h)_날짜' 열은 그 날짜에 기준시간보다 얼마나 적게 일했는지(0 이하 숫자, 화면 입력값과 동일)이며, 정상 근무한 날은 빈 칸입니다."],
    ["- 이 사이트의 '⬆ Excel 파일 불러오기' 버튼으로 그대로 다시 불러올 수 있습니다."],
  ];
  const infoWs = XLSX.utils.aoa_to_sheet(infoRows);
  XLSX.utils.book_append_sheet(wb, infoWs, "안내");

  const used = new Set(["안내"]);
  state.events.forEach(ev => {
    const rows = buildEventSheetRows(ev);
    const ws = XLSX.utils.aoa_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, sanitizeSheetName(ev.name, used));
  });
  return wb;
}

/* ============ blank starter template (빈 양식) ============ */
/* Builds a synthetic example project — NOT added to state.events — purely so it can be
   run through the same buildEventSheetRows()/XLSX writer used for real backups. Because
   the exported columns are byte-for-byte the same shape parseEventSheet() already reads,
   a filled-in copy of this file uploads through the normal "⬆ Excel 파일 불러오기" button
   with no separate import path to write or test. */
function buildTemplateEvent() {
  const roles = defaultRoles();
  const today = new Date();
  const offsets = [1, 2, 3, 4, 5];
  const types = ["prep", "prep", "event", "event", "event"];
  const dates = offsets.map((off, idx) => {
    const d = new Date(today.getTime());
    d.setDate(d.getDate() + off);
    return { date: localIso(d), type: types[idx], holiday: idx === 4 };
  });
  const staff = [
    {
      id: uid(), name: "홍길동(예시)", roleId: roles[0].id, note: "",
      attendance: Object.fromEntries(dates.map((d, i) => [d.date, i < 4])),
      overtimeByMonth: {}, extraPayByMonth: {},
    },
    {
      id: uid(), name: "김철수(예시)", roleId: roles[3].id, note: "",
      attendance: Object.fromEntries(dates.map((d, i) => [d.date, i % 2 === 0])),
      overtimeByMonth: {}, extraPayByMonth: {},
    },
  ];
  return { id: "template", name: "새 프로젝트(양식 예시)", memo: "", roles, dates, staff };
}

function buildTemplateWorkbook() {
  const wb = XLSX.utils.book_new();
  const infoRows = [
    ["근무 스케줄 & 급여 계산 - 빈 양식 (작성 예시 포함)"],
    [""],
    ["이 파일은 예시 값이 미리 채워진 작성용 양식입니다. 아래 순서대로 실제 프로젝트 내용으로 바꾼 뒤,"],
    ["이 사이트의 '⬆ Excel 파일 불러오기' 버튼으로 그대로 업로드하면 프로젝트가 바로 등록됩니다."],
    [""],
    ["1) 프로젝트 시트의 이름(하단 시트 탭)을 원하는 프로젝트 이름으로 바꾸세요. (예: '26.09 도서전')"],
    ["2) 맨 위 직급별 급여 기준표(직급명 / 행사일 일급 / 사전준비 시급 / 기준시간 / 공휴일 수당 / 연장 시급)를 실제 값으로 수정하세요."],
    ["   직급을 더 추가하려면 표 안(빈 줄 바로 위)에 행을 추가하고, 필요 없는 직급 행은 지우면 됩니다."],
    ["3) 급여 기준표 아래 빈 줄 다음 표에서, 날짜가 적힌 열 머리글을 실제 날짜로 바꾸세요 (예: 2026-09-03 형식)."],
    ["   그 아래 칸에는 '행사일' 또는 '사전준비일'을 적고, 공휴일이면 뒤에 '(공휴일)'을 붙이세요. 예: 행사일 (공휴일)"],
    ["   날짜를 더 추가하려면 날짜 열 하나를 통째로 복사해서 오른쪽에 붙여넣고 값만 바꾸면 됩니다."],
    ["4) 각 사람 행에서, 근무한 날짜 칸에는 'O'를 입력하고 근무하지 않은 날은 비워두세요."],
    ["   '연장(h)_YYYY-MM' 칸에는 그 달의 연장근무 시간을 입력하세요 (해당 없으면 0 또는 빈칸)."],
    ["   '추가지급(원)_YYYY-MM' 칸에는 시급/일급 계산과 무관하게 그 달에 별도로 더 지급할 금액을 원 단위로 입력하세요 (해당 없으면 0 또는 빈칸)."],
    ["   '단축근무부족(h)_YYYY-MM-DD' 칸에는 그 날짜에 기준시간보다 부족하게 일한 시간을 0 이하 숫자로 입력하세요 (예: 8시간 기준에 5시간만 근무 = -3). 정상 근무한 날은 비워두세요."],
    ["5) '행사일수/사전준비일수/공휴일수/기본급/공휴일수당/연장수당/단축근무차감액(합계)/추가지급(합계)/최종지급액' 칸은 예시로 계산되어 채워져 있지만,"],
    ["   이 사이트에서 불러오면 직급별 급여 기준에 맞게 자동으로 새로 계산되므로 비워두거나 그대로 두어도 됩니다."],
    ["6) 인원을 더 추가하려면 표 맨 아래에 행을 추가하면 됩니다."],
    [""],
    ["작성이 끝나면 이 파일을 저장한 뒤, 사이트의 '⑥ 데이터 저장/불러오기' 탭에서 '⬆ Excel 파일 불러오기'로 업로드하세요."],
  ];
  const infoWs = XLSX.utils.aoa_to_sheet(infoRows);
  infoWs["!cols"] = [{ wch: 100 }];
  XLSX.utils.book_append_sheet(wb, infoWs, "안내");

  const templateEvent = buildTemplateEvent();
  const rows = buildEventSheetRows(templateEvent);
  const ws = XLSX.utils.aoa_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, sanitizeSheetName(templateEvent.name, new Set(["안내"])));
  return wb;
}

document.getElementById("downloadTemplateBtn").addEventListener("click", () => {
  try {
    const wb = buildTemplateWorkbook();
    XLSX.writeFile(wb, "근무스케줄_빈양식.xlsx");
  } catch (err) {
    alert("양식 파일을 만드는 중 문제가 발생했습니다: " + err.message);
  }
});

document.getElementById("exportExcelBtn").addEventListener("click", () => {
  try {
    const wb = buildWorkbook();
    XLSX.writeFile(wb, "근무스케줄_급여데이터.xlsx");
  } catch (err) {
    alert("Excel 파일을 만드는 중 문제가 발생했습니다: " + err.message);
  }
});

document.getElementById("importExcelBtn").addEventListener("click", () => {
  document.getElementById("importExcelInput").click();
});

function isIsoDate(s) { return typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s); }

function parseEventSheet(sheetName, rows) {
  // 1) role table: header row0 = ROLE_HEADER, then role rows until first blank row.
  // "행사일 기준시간(h)" is a newer column (added for 단축근무 proration) — older exported
  // files won't have it, so detect its presence from the header row itself rather than
  // assuming a fixed column count, and default it to 8h when reading a legacy file.
  const roleHeaderRow = rows[0] || [];
  const hasEventStdHoursCol = roleHeaderRow[2] === "행사일 기준시간(h)";
  let i = 1;
  const roles = [];
  while (i < rows.length && rows[i] && rows[i].length && rows[i][0]) {
    const r = rows[i];
    if (hasEventStdHoursCol) {
      roles.push({
        id: uid(),
        name: String(r[0] || "직급"),
        dailyRate: Number(r[1] || 0),
        eventStandardHours: Number(r[2] || 8),
        hourlyRate: Number(r[3] || 0),
        standardHours: Number(r[4] || 8),
        holidayBonus: Number(r[5] || 0),
        otRate: Number(r[6] || 0),
      });
    } else {
      roles.push({
        id: uid(),
        name: String(r[0] || "직급"),
        dailyRate: Number(r[1] || 0),
        eventStandardHours: 8,
        hourlyRate: Number(r[2] || 0),
        standardHours: Number(r[3] || 8),
        holidayBonus: Number(r[4] || 0),
        otRate: Number(r[5] || 0),
      });
    }
    i++;
  }
  while (i < rows.length && (!rows[i] || !rows[i][0])) i++; // skip blank separator row(s) (first cell empty)

  // 계약금액 행(있으면). 이 행이 없는 예전 파일이면 header1이 바로 나오므로 조건이
  // 그냥 통과되어 기존과 동일하게 동작한다(하위 호환). "도급/계약 금액"은 이 기능을 처음
  // 추가했을 때 잠깐 쓰였던 옛 라벨이라, 그 사이 내보낸 파일도 인식할 수 있도록 같이 확인한다.
  let contractAmount = 0;
  if (rows[i] && (String(rows[i][0] || "").indexOf("계약금액") === 0 || String(rows[i][0] || "").indexOf("도급/계약 금액") === 0)) {
    contractAmount = Number(rows[i][1] || 0);
    i++;
    while (i < rows.length && (!rows[i] || !rows[i][0])) i++;
  }

  const header1 = rows[i] || [];
  const header2 = rows[i+1] || [];
  i += 2;

  // date columns: between index 2 and the point where SUMMARY_HEADER starts
  const dateCols = [];
  for (let c = 2; c < header1.length; c++) {
    const v = header1[c];
    if (isIsoDate(v)) {
      const typeRaw = String(header2[c] || "");
      dateCols.push({
        col: c,
        date: v,
        type: parseDateTypeLabel(typeRaw),
        holiday: typeRaw.indexOf("공휴일") !== -1,
      });
    }
  }
  // one OT column per month, named "연장(h)_YYYY-MM" (older single-column exports used a plain
  // "연장(h)" header — fall back to treating that as a single unlabeled month for compatibility)
  const otCols = [];
  header1.forEach((h, idx) => {
    const label = String(h || "");
    if (label.indexOf(OT_COL_PREFIX) === 0) otCols.push({ col: idx, month: label.slice(OT_COL_PREFIX.length) });
  });
  const legacyOtColIndex = otCols.length === 0 ? header1.indexOf("연장(h)") : -1;
  // one 추가지급 column per month, named "추가지급(원)_YYYY-MM"; older exported files (from
  // before this feature existed) simply have none, and staff default to no extra pay.
  const extraCols = [];
  header1.forEach((h, idx) => {
    const label = String(h || "");
    if (label.indexOf(EXTRA_COL_PREFIX) === 0) extraCols.push({ col: idx, month: label.slice(EXTRA_COL_PREFIX.length) });
  });
  // 단축근무: 날짜별 1열씩, "단축근무부족(h)_YYYY-MM-DD" 형태. 값은 기준시간 대비 부족시간(음수)이며,
  // 저장 형식(staff.earlyLeaveByDate)은 실제 근무시간이라 불러올 때 변환이 필요하다. 이 열이 아예
  // 없는 예전 파일은 단축근무 입력이 없었던 것으로 처리한다(하위 호환).
  const earlyCols = [];
  header1.forEach((h, idx) => {
    const label = String(h || "");
    if (label.indexOf(EARLY_COL_PREFIX) === 0) earlyCols.push({ col: idx, date: label.slice(EARLY_COL_PREFIX.length) });
  });
  const dateInfoByDate = {};
  dateCols.forEach(dc => { dateInfoByDate[dc.date] = dc; });

  const roleByName = {};
  roles.forEach(r => roleByName[r.name] = r.id);

  const staff = [];
  for (; i < rows.length; i++) {
    const r = rows[i];
    if (!r || !r[0]) continue;
    const name = String(r[0]);
    const roleName = String(r[1] || "");
    let roleId = roleByName[roleName];
    if (!roleId && roleName) {
      const newRole = { id: uid(), name: roleName, dailyRate: 0, eventStandardHours: 8, hourlyRate: 0, standardHours: 8, holidayBonus: 0, otRate: 0 };
      roles.push(newRole); roleByName[roleName] = newRole.id; roleId = newRole.id;
    }
    const role = roles.find(rr => rr.id === roleId);
    const attendance = {};
    dateCols.forEach(dc => { if (r[dc.col]) attendance[dc.date] = true; });
    const overtimeByMonth = {};
    otCols.forEach(oc => { overtimeByMonth[oc.month] = Number(r[oc.col] || 0); });
    if (legacyOtColIndex >= 0) {
      const fallbackMonth = (dateCols[0] && dateCols[0].date.slice(0, 7)) || "합계";
      overtimeByMonth[fallbackMonth] = Number(r[legacyOtColIndex] || 0);
    }
    const extraPayByMonth = {};
    extraCols.forEach(ec => { extraPayByMonth[ec.month] = Number(r[ec.col] || 0); });
    const earlyLeaveByDate = {};
    earlyCols.forEach(ec => {
      const raw = r[ec.col];
      if (raw === "" || raw == null) return; // blank = worked the full standard day, no override
      const deficit = Math.min(0, Number(raw) || 0); // clamp any stray positive value, same as the UI input
      const dinfo = dateInfoByDate[ec.date];
      const stdH = !role ? 8 : (dinfo && dinfo.type === "event" ? (role.eventStandardHours || 8) : (role.standardHours || 8));
      earlyLeaveByDate[ec.date] = Math.max(0, stdH + deficit);
    });
    staff.push({ id: uid(), name, roleId, note: "", attendance, overtimeByMonth, extraPayByMonth, earlyLeaveByDate });
  }

  const dates = dateCols.map(dc => ({ date: dc.date, type: dc.type, holiday: dc.holiday }));
  return { id: uid(), name: sheetName, memo: "", roles, dates, staff, contractAmount };
}

document.getElementById("importExcelInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = new Uint8Array(reader.result);
      const wb = XLSX.read(data, { type: "array" });
      const importedEvents = [];
      wb.SheetNames.forEach(sheetName => {
        if (sheetName === "안내") return;
        const ws = wb.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: "" });
        if (!rows.length) return;
        try {
          importedEvents.push(parseEventSheet(sheetName, rows));
        } catch (err) {
          console.error("시트 파싱 실패:", sheetName, err);
        }
      });
      if (importedEvents.length === 0) throw new Error("이 파일에서 프로젝트 데이터를 찾지 못했습니다. 이 도구에서 내보낸 Excel 파일인지 확인해주세요.");
      // 업로드는 기존 프로젝트를 지우지 않고 이름(시트명)이 같은 프로젝트만 덮어쓰고,
      // 새로운 이름은 목록 끝에 추가합니다.
      let addedCount = 0, updatedCount = 0;
      importedEvents.forEach(ev => {
        const idx = state.events.findIndex(e => e.name === ev.name);
        if (idx === -1) {
          state.events.push(ev);
          addedCount++;
        } else {
          ev.id = state.events[idx].id; // 기존 id를 유지해 activeEventId 등 참조가 깨지지 않도록
          state.events[idx] = ev;
          updatedCount++;
        }
      });
      state.activeEventId = importedEvents[0].id;
      renderAll();
      const parts = [];
      if (addedCount) parts.push(`${addedCount}개 프로젝트 추가`);
      if (updatedCount) parts.push(`${updatedCount}개 프로젝트 업데이트(동일 이름 시트)`);
      alert(`${parts.join(", ")} 완료됐습니다. (기존 다른 프로젝트는 그대로 남아있습니다)`);
    } catch (err) {
      alert("파일을 읽는 중 문제가 발생했습니다: " + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
  e.target.value = "";
});

/* ============ TAB 5: smart import from an original (non-round-trip) spreadsheet ============ */
let rawWb = null;
let rawRows = null; // rows of the currently previewed sheet

function colLetterToIndex0(letter) {
  letter = String(letter || "").trim().toUpperCase();
  if (!letter) return -1;
  let idx = 0;
  for (let i = 0; i < letter.length; i++) {
    const code = letter.charCodeAt(i) - 64;
    if (code < 1 || code > 26) return -1;
    idx = idx * 26 + code;
  }
  return idx - 1; // 0-based
}
function indexToColLetter(idx0) {
  let idx = idx0 + 1;
  let s = "";
  while (idx > 0) {
    const rem = (idx - 1) % 26;
    s = String.fromCharCode(65 + rem) + s;
    idx = Math.floor((idx - 1) / 26);
  }
  return s;
}

document.getElementById("rawImportPickBtn").addEventListener("click", () => {
  document.getElementById("rawImportInput").click();
});

document.getElementById("rawImportInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      rawWb = XLSX.read(new Uint8Array(reader.result), { type: "array" });
      const sel = document.getElementById("rawSheetSelect");
      sel.innerHTML = rawWb.SheetNames.map(n => `<option value="${escapeAttr(n)}">${escapeAttr(n)}</option>`).join("");
      sel.style.display = "";
      renderRawPreview(rawWb.SheetNames[0]);
    } catch (err) {
      alert("파일을 여는 중 문제가 발생했습니다: " + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
  e.target.value = "";
});
document.getElementById("rawSheetSelect").addEventListener("change", (e) => renderRawPreview(e.target.value));

// sheet_to_json returns arrays relative to the sheet's USED range, not always column A / row 1
// (e.g. if columns A-B are empty or hidden, index 0 would silently be column C). Pad so that
// rawRows[r-1][c] always matches the real Excel row r / column c the user reads off the sheet.
function getAbsoluteRows(ws) {
  let rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: "" });
  const ref = ws["!ref"];
  if (ref) {
    const range = XLSX.utils.decode_range(ref);
    if (range.s.c > 0) rows = rows.map(r => Array(range.s.c).fill("").concat(r));
    if (range.s.r > 0) rows = Array.from({ length: range.s.r }, () => []).concat(rows);
  }
  return rows;
}

function renderRawPreview(sheetName) {
  const ws = rawWb.Sheets[sheetName];
  rawRows = getAbsoluteRows(ws);
  const maxRows = Math.min(rawRows.length, 40);
  const maxCols = Math.min(Math.max(...rawRows.slice(0, maxRows).map(r => r.length), 1), 40);

  let html = "<thead><tr><th></th>";
  for (let c = 0; c < maxCols; c++) html += `<th>${indexToColLetter(c)}</th>`;
  html += "</tr></thead><tbody>";
  for (let r = 0; r < maxRows; r++) {
    html += `<tr><th>${r + 1}</th>`;
    for (let c = 0; c < maxCols; c++) {
      const v = (rawRows[r] && rawRows[r][c] !== undefined) ? rawRows[r][c] : "";
      html += `<td>${escapeAttr(v)}</td>`;
    }
    html += "</tr>";
  }
  html += "</tbody>";
  document.getElementById("rawPreviewTable").innerHTML = html;
  document.getElementById("rawPreviewWrap").style.display = "";
  document.getElementById("rawMappingForm").style.display = "";
  document.getElementById("rawEventName").value = sheetName;

  if (document.querySelectorAll("#rawBlocksTable tbody tr").length === 0) addRawBlockRow();
}

function addRawBlockRow() {
  const tbody = document.querySelector("#rawBlocksTable tbody");
  const tr = document.createElement("tr");
  const year = new Date().getFullYear();
  tr.innerHTML = `
    <td><input type="text" class="raw-block-start" placeholder="F"></td>
    <td><input type="text" class="raw-block-end" placeholder="M"></td>
    <td><input type="number" class="raw-block-dayrow" placeholder="5"></td>
    <td><input type="number" class="raw-block-year" value="${year}"></td>
    <td><input type="number" class="raw-block-month" placeholder="1-12"></td>
    <td><button class="danger-text row-del">✕</button></td>
  `;
  tr.querySelector(".row-del").addEventListener("click", () => tr.remove());
  tbody.appendChild(tr);
}
document.getElementById("addRawBlockBtn").addEventListener("click", addRawBlockRow);

document.getElementById("rawImportApplyBtn").addEventListener("click", () => {
  const statusEl = document.getElementById("rawImportStatus");
  try {
    if (!rawRows) throw new Error("먼저 파일을 올리고 시트를 선택하세요.");
    const eventName = document.getElementById("rawEventName").value.trim() || "가져온 프로젝트";
    const marker = (document.getElementById("rawMarker").value || "F").trim().toUpperCase();
    const nameColIdx = colLetterToIndex0(document.getElementById("rawNameCol").value);
    const roleColRaw = document.getElementById("rawRoleCol").value;
    const roleColIdx = roleColRaw.trim() ? colLetterToIndex0(roleColRaw) : -1;
    const dataStart = parseInt(document.getElementById("rawDataStart").value, 10);
    const dataEndInput = document.getElementById("rawDataEnd").value;
    if (nameColIdx < 0) throw new Error("이름이 있는 열을 올바르게 입력하세요 (예: D).");
    if (!dataStart || dataStart < 1) throw new Error("인원 데이터 시작 행을 입력하세요.");

    let dataEnd = dataEndInput ? parseInt(dataEndInput, 10) : null;
    if (!dataEnd) {
      let r = dataStart;
      while (r <= rawRows.length && rawRows[r - 1] && rawRows[r - 1][nameColIdx]) r++;
      dataEnd = r - 1;
    }
    if (dataEnd < dataStart) throw new Error("인원 데이터 끝 행이 시작 행보다 앞에 있습니다.");

    const blockRows = document.querySelectorAll("#rawBlocksTable tbody tr");
    if (blockRows.length === 0) throw new Error("근무일 구간을 최소 1개 추가하세요.");

    // collect date columns across all blocks: {colIdx, date, dow, type}
    const dateCols = [];
    const seenDates = new Set();
    blockRows.forEach((tr, bi) => {
      const startCol = colLetterToIndex0(tr.querySelector(".raw-block-start").value);
      const endCol = colLetterToIndex0(tr.querySelector(".raw-block-end").value);
      const dayRow = parseInt(tr.querySelector(".raw-block-dayrow").value, 10);
      const year = parseInt(tr.querySelector(".raw-block-year").value, 10);
      const month = parseInt(tr.querySelector(".raw-block-month").value, 10);
      if (startCol < 0 || endCol < 0) throw new Error(`구간 ${bi + 1}: 시작/끝 열을 올바르게 입력하세요.`);
      if (!dayRow) throw new Error(`구간 ${bi + 1}: 일자가 적힌 행 번호를 입력하세요.`);
      if (!year || !month || month < 1 || month > 12) throw new Error(`구간 ${bi + 1}: 연도와 월(1-12)을 입력하세요.`);
      for (let c = Math.min(startCol, endCol); c <= Math.max(startCol, endCol); c++) {
        const dayVal = rawRows[dayRow - 1] ? rawRows[dayRow - 1][c] : "";
        const day = parseInt(dayVal, 10);
        if (!day || day < 1 || day > 31 || String(dayVal).trim() === "") continue; // skip non-date columns in range
        const mm = String(month).padStart(2, "0");
        const dd = String(day).padStart(2, "0");
        const iso = `${year}-${mm}-${dd}`;
        if (seenDates.has(iso)) continue;
        seenDates.add(iso);
        const dow = dowOf(iso);
        dateCols.push({ col: c, date: iso, type: isWeekendDow(dow) ? "event" : "prep" });
      }
    });
    if (dateCols.length === 0) throw new Error("지정한 구간에서 유효한 날짜를 하나도 찾지 못했습니다. '일자가 적힌 행' 번호를 확인해주세요.");
    dateCols.sort((a, b) => a.date.localeCompare(b.date));

    const roles = [];
    const roleByName = {};
    function ensureRole(name) {
      const key = name || "일반";
      if (!roleByName[key]) {
        const role = { id: uid(), name: key, dailyRate: 0, eventStandardHours: 8, hourlyRate: 0, standardHours: 8, holidayBonus: 0, otRate: 0 };
        roles.push(role);
        roleByName[key] = role.id;
      }
      return roleByName[key];
    }

    const staff = [];
    for (let r = dataStart; r <= dataEnd; r++) {
      const row = rawRows[r - 1];
      if (!row || !row[nameColIdx]) continue;
      const name = String(row[nameColIdx]).trim();
      if (!name) continue;
      const roleName = roleColIdx >= 0 ? String(row[roleColIdx] || "").trim() : "";
      const roleId = ensureRole(roleName);
      const attendance = {};
      dateCols.forEach(dc => {
        const cell = row[dc.col];
        if (cell !== undefined && cell !== "" && String(cell).trim().toUpperCase() === marker) {
          attendance[dc.date] = true;
        }
      });
      staff.push({ id: uid(), name, roleId, note: "", attendance, overtimeByMonth: {}, extraPayByMonth: {} });
    }
    if (staff.length === 0) throw new Error("지정한 행 범위에서 인원을 하나도 찾지 못했습니다. 이름 열과 데이터 시작/끝 행을 확인해주세요.");
    if (roles.length === 0) ensureRole("일반");

    const ev = {
      id: uid(), name: eventName, memo: "",
      roles: roles.length ? roles : [{ id: uid(), name: "일반", dailyRate: 0, eventStandardHours: 8, hourlyRate: 0, standardHours: 8, holidayBonus: 0, otRate: 0 }],
      dates: dateCols.map(dc => ({ date: dc.date, type: dc.type, holiday: false })),
      staff,
      contractAmount: 0,
    };
    state.events.push(ev);
    state.activeEventId = ev.id;
    renderAll();
    document.querySelector('.tab-btn[data-tab="setup"]').click();
    statusEl.textContent = "";
    alert(`"${eventName}" 프로젝트를 만들었습니다. 인원 ${staff.length}명, 근무일 ${dateCols.length}일을 가져왔어요. 이제 직급별 급여 기준을 입력해주세요.`);
  } catch (err) {
    statusEl.textContent = "";
    alert("가져오는 중 문제가 발생했습니다: " + err.message);
  }
});

/* ============ TAB 5: PDF export of payroll results ============ */
document.getElementById("exportPdfBtn").addEventListener("click", async () => {
  const ev = activeEvent();
  if (ev.staff.length === 0) { alert("내보낼 급여 결과가 없습니다."); return; }
  const statusEl = document.getElementById("pdfStatus");
  const btn = document.getElementById("exportPdfBtn");
  btn.disabled = true;
  statusEl.textContent = "PDF 생성 중...";
  let captureWrap = null;
  try {
    // switch to result tab and ensure it's rendered
    document.querySelector('.tab-btn[data-tab="result"]').click();
    renderResults();
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    const target = document.getElementById("resultContent");
    const rootEl = document.documentElement;
    const prevTheme = rootEl.getAttribute("data-theme");
    rootEl.setAttribute("data-theme", "light"); // print-friendly regardless of current toggle
    await new Promise(r => setTimeout(r, 60));

    // Build an offscreen wrapper with a Korean-safe title (jsPDF's built-in fonts
    // can't render Hangul, so the title must be rasterized along with the rest).
    captureWrap = document.createElement("div");
    captureWrap.style.cssText = `position:fixed; left:-99999px; top:0; width:${target.offsetWidth}px; background:var(--surface-1); padding:20px; font-family:system-ui,-apple-system,'Segoe UI',sans-serif;`;
    const titleSuffix = currentResultMonth ? ` (${monthLabel(currentResultMonth)})` : "";
    captureWrap.innerHTML = `<h1 style="margin:0 0 16px; font-size:19px; color:var(--text-primary);">${escapeAttr(ev.name)} — 급여 결과${escapeAttr(titleSuffix)}</h1>` + target.innerHTML;
    document.body.appendChild(captureWrap);

    const canvas = await html2canvas(captureWrap, { scale: 1.5, backgroundColor: "#fcfcfb" });

    if (prevTheme) rootEl.setAttribute("data-theme", prevTheme); else rootEl.removeAttribute("data-theme");

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const margin = 24;
    const imgW = pageW - margin * 2;
    const imgH = (canvas.height * imgW) / canvas.width;

    const usablePageH = pageH - margin * 2;
    let renderedH = 0;
    let pageIdx = 0;
    const pxPerPt = canvas.width / imgW; // canvas px per output pt

    while (renderedH < imgH) {
      if (pageIdx > 0) { pdf.addPage(); }
      const sliceH_pt = Math.min(usablePageH, imgH - renderedH);
      const sliceCanvas = document.createElement("canvas");
      sliceCanvas.width = canvas.width;
      sliceCanvas.height = Math.round(sliceH_pt * pxPerPt);
      const ctx = sliceCanvas.getContext("2d");
      ctx.drawImage(canvas, 0, Math.round(renderedH * pxPerPt), canvas.width, sliceCanvas.height, 0, 0, canvas.width, sliceCanvas.height);
      const sliceData = sliceCanvas.toDataURL("image/jpeg", 0.93);
      pdf.addImage(sliceData, "JPEG", margin, margin, imgW, sliceH_pt);
      renderedH += sliceH_pt;
      pageIdx++;
    }

    const fileSuffix = currentResultMonth ? `_${currentResultMonth}` : "";
    pdf.save(`${ev.name}_급여결과${fileSuffix}.pdf`);
    statusEl.textContent = "";
  } catch (err) {
    console.error(err);
    statusEl.textContent = "";
    alert("PDF 생성 중 문제가 발생했습니다: " + err.message);
  } finally {
    if (captureWrap && captureWrap.parentNode) captureWrap.parentNode.removeChild(captureWrap);
    btn.disabled = false;
  }
});

document.getElementById("loadSampleBtn").addEventListener("click", () => {
  if (!confirm("샘플 프로젝트를 새로 추가할까요? (기존 데이터는 그대로 유지됩니다)")) return;
  const ev = blankEvent("26.05 백야의 꽃길 (샘플)");
  ev.roles = [
    { id: uid(), name: "매니저",   dailyRate: 150000, eventStandardHours: 8, hourlyRate: 17647, standardHours: 8, holidayBonus: 85000, otRate: 17647 },
    { id: uid(), name: "부매니저", dailyRate: 140000, eventStandardHours: 8, hourlyRate: 16471, standardHours: 8, holidayBonus: 80000, otRate: 16471 },
    { id: uid(), name: "알바",     dailyRate: 120000, eventStandardHours: 8, hourlyRate: 14120, standardHours: 8, holidayBonus: 60000, otRate: 14120 },
  ];
  const roleByName = {};
  ev.roles.forEach(r => roleByName[r.name] = r.id);

  const YEAR = 2026;
  ev.dates = SAMPLE_BAEKYA.dates.map(d => {
    const mm = String(d.month).padStart(2,"0");
    const dd = String(d.day).padStart(2,"0");
    return { date: `${YEAR}-${mm}-${dd}`, type: d.type, holiday: false };
  });

  ev.staff = SAMPLE_BAEKYA.people.map(p => {
    const attendance = {};
    ev.dates.forEach((d, i) => { if (p.attendance[i]) attendance[d.date] = true; });
    return { id: uid(), name: p.name, roleId: roleByName[p.role] || ev.roles[2].id, note: p.note, attendance, overtimeByMonth: {}, extraPayByMonth: {} };
  });

  state.events.push(ev);
  state.activeEventId = ev.id;
  renderAll();
  document.querySelector('.tab-btn[data-tab="result"]').click();
});

/* ============ 실시간 공동편집 연동 (jsonbin.io 공유 API) ============ */
/* 이 앱은 서버가 없으므로, jsonbin.io라는 무료 JSON 저장 서비스를 "공유 저장소"로 사용한다.
   전체 state(모든 프로젝트)를 { updatedAt, state } 형태의 JSON으로 그 서비스의 "데이터함(Bin)"
   하나에 통째로 저장/조회한다. 진짜 실시간 동시편집(라이브 커서 등)은 아니고, "각자 편집 후
   저장하면 서로 최신 내용을 불러올 수 있는" 공유 저장 방식이다. jsonbin.io 자체에는 서버 측
   원자적 잠금 기능이 없으므로, 저장(PUT) 직전에 원격 updatedAt을 한 번 더 확인해 그 사이
   달라졌으면 충돌로 간주하고 사용자에게 확인한다 — 완벽한 동시성 보장은 아니고 저장 시점에
   한 번 확인하는 수준의 충돌 감지다. */
let syncApiKey = "";
let syncBinId = "";
let syncKnownUpdatedAt = "";
let syncPollTimer = null;
const SYNC_POLL_MS = 60000; // jsonbin.io 무료 요금제 요청 횟수(1회성 10,000회)를 아끼기 위해 60초 간격
/* API 키 + 데이터함 ID는 (state와 마찬가지로) 이 브라우저의 localStorage에 저장해둔다.
   그래야 "연결"을 누른 뒤 새로고침해도 매번 다시 입력/연결할 필요 없이 자동으로
   재연결된다. 공유 링크(?syncKey=...&syncBin=...)로 들어온 경우가 우선이고, 그런
   파라미터가 없을 때만 이 저장된 연결 정보를 쓴다. */
const SYNC_CONN_KEY = "sweetspot_schedule_payroll_sync_conn_v1";
function saveSyncConnection() {
  try {
    localStorage.setItem(SYNC_CONN_KEY, JSON.stringify({ apiKey: syncApiKey, binId: syncBinId }));
  } catch (err) { /* 저장 실패해도 연결 자체는 계속 쓸 수 있으니 조용히 무시 */ }
}
function clearSyncConnection() {
  try { localStorage.removeItem(SYNC_CONN_KEY); } catch (err) {}
  if (syncPollTimer) clearInterval(syncPollTimer);
  syncPollTimer = null;
  syncApiKey = ""; syncBinId = ""; syncKnownUpdatedAt = "";
  document.getElementById("syncApiKeyInput").value = "";
  document.getElementById("syncBinIdInput").value = "";
  showSyncBanner(false);
  setSyncStatus("연결되지 않음");
}
/* 저장된 연결 정보가 있으면 자동으로 입력칸을 채우고 재연결한다. */
function tryAutoReconnectSync() {
  try {
    const raw = localStorage.getItem(SYNC_CONN_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    if (!saved || !saved.apiKey || !saved.binId) return false;
    document.getElementById("syncApiKeyInput").value = saved.apiKey;
    document.getElementById("syncBinIdInput").value = saved.binId;
    syncApiKey = saved.apiKey;
    syncBinId = saved.binId;
    setSyncStatus("이전에 연결했던 데이터함에 다시 연결하는 중...");
    syncPull().then(startSyncPolling);
    return true;
  } catch (err) {
    return false;
  }
}

function setSyncStatus(text) {
  const el = document.getElementById("syncStatus");
  if (el) el.textContent = text;
}
function fmtSyncTime(iso) {
  if (!iso) return "없음";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return `${d.getFullYear()}.${d.getMonth()+1}.${d.getDate()} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`;
}
function showSyncBanner(show) {
  const el = document.getElementById("syncBanner");
  if (el) el.style.display = show ? "flex" : "none";
}

function syncBinUrl() {
  return `https://api.jsonbin.io/v3/b/${syncBinId}`;
}
function syncHeaders(extra) {
  return Object.assign({ "X-Master-Key": syncApiKey }, extra || {});
}
function syncFriendlyError(err) {
  const msg = String(err && err.message || err || "");
  if (/HTTP 401|HTTP 403/.test(msg)) return "API 키가 올바르지 않습니다. (" + msg + ")";
  if (/HTTP 404/.test(msg)) return "데이터함 ID가 올바르지 않습니다. (" + msg + ")";
  return msg;
}

async function jsonbinGetUpdatedAtOnly() {
  const res = await fetch(syncBinUrl() + "/latest", { headers: syncHeaders({ "X-JSON-Path": "updatedAt" }) });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  return (data && typeof data.record !== "undefined") ? data.record : (data ? data.updatedAt : null);
}
async function jsonbinGetFull() {
  const res = await fetch(syncBinUrl() + "/latest", { headers: syncHeaders() });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  return data.record || {};
}
async function jsonbinPut(recordObj) {
  const res = await fetch(syncBinUrl(), {
    method: "PUT",
    headers: syncHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(recordObj),
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  return data.record || recordObj;
}
async function jsonbinCreate(recordObj) {
  const res = await fetch("https://api.jsonbin.io/v3/b", {
    method: "POST",
    headers: syncHeaders({ "Content-Type": "application/json", "X-Bin-Name": "schedule-payroll-shared-data" }),
    body: JSON.stringify(recordObj),
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  return data.metadata && data.metadata.id;
}

function startSyncPolling() {
  if (syncPollTimer) clearInterval(syncPollTimer);
  syncPollTimer = setInterval(syncCheckForUpdates, SYNC_POLL_MS);
}

async function syncCheckForUpdates() {
  if (!syncApiKey || !syncBinId) return;
  try {
    const updatedAt = await jsonbinGetUpdatedAtOnly();
    if (updatedAt && updatedAt !== syncKnownUpdatedAt) {
      showSyncBanner(true);
    }
  } catch (err) { /* 자동 확인은 실패해도 조용히 넘어간다 */ }
}

function applyRemoteState(remoteState) {
  if (remoteState && Array.isArray(remoteState.events) && remoteState.events.length > 0) {
    state = remoteState;
    if (!state.activeEventId || !state.events.find(e => e.id === state.activeEventId)) {
      state.activeEventId = state.events[0].id;
    }
    renderAll();
    return true;
  }
  return false;
}

async function syncConnect(silent) {
  const apiKeyInput = document.getElementById("syncApiKeyInput");
  const binIdInput = document.getElementById("syncBinIdInput");
  const apiKey = (apiKeyInput.value || "").trim();
  const binId = (binIdInput.value || "").trim();
  if (!apiKey || !binId) { if (!silent) alert("API 키와 데이터함 ID를 모두 입력하세요. (데이터함이 없다면 \"새로 만들기\"를 먼저 눌러주세요)"); return; }
  syncApiKey = apiKey;
  syncBinId = binId;
  setSyncStatus("연결 확인 중...");
  try {
    const updatedAt = await jsonbinGetUpdatedAtOnly();
    syncKnownUpdatedAt = updatedAt || "";
    setSyncStatus(syncKnownUpdatedAt ? `연결됨 — 마지막 저장: ${fmtSyncTime(syncKnownUpdatedAt)}` : "연결됨 — 아직 저장된 데이터가 없습니다. \"지금 저장\"으로 현재 화면 내용을 올릴 수 있어요.");
    startSyncPolling();
    saveSyncConnection();
  } catch (err) {
    setSyncStatus("연결 실패: " + syncFriendlyError(err));
  }
}

async function syncCreateBin() {
  const apiKeyInput = document.getElementById("syncApiKeyInput");
  const binIdInput = document.getElementById("syncBinIdInput");
  const apiKey = (apiKeyInput.value || "").trim();
  if (!apiKey) { alert("먼저 API 키를 입력하세요."); return; }
  setSyncStatus("새 데이터함 만드는 중...");
  try {
    syncApiKey = apiKey;
    const nowIso = new Date().toISOString();
    const id = await jsonbinCreate({ updatedAt: nowIso, state });
    binIdInput.value = id;
    syncBinId = id;
    syncKnownUpdatedAt = nowIso;
    startSyncPolling();
    saveSyncConnection();
    setSyncStatus(`연결됨 — 마지막 저장: ${fmtSyncTime(syncKnownUpdatedAt)}`);
    alert("새 공유 데이터함이 만들어지고 현재 화면 내용이 저장되었습니다.\n\n데이터함 ID: " + id + "\n\n이 ID(또는 아래 \"공유 링크 복사\")를 다른 사람에게 알려주시면 함께 쓸 수 있어요.");
  } catch (err) {
    setSyncStatus("만들기 실패: " + syncFriendlyError(err));
  }
}

async function syncPull() {
  if (!syncApiKey || !syncBinId) { alert("먼저 API 키와 데이터함 ID를 연결하세요."); return; }
  setSyncStatus("불러오는 중...");
  try {
    const record = await jsonbinGetFull();
    const applied = applyRemoteState(record.state);
    syncKnownUpdatedAt = record.updatedAt || "";
    showSyncBanner(false);
    setSyncStatus(applied
      ? `불러오기 완료 — 마지막 저장: ${fmtSyncTime(syncKnownUpdatedAt)}`
      : "공유 데이터함에 아직 저장된 데이터가 없습니다.");
  } catch (err) {
    setSyncStatus("불러오기 실패: " + syncFriendlyError(err));
  }
}

async function syncPush(force) {
  if (!syncApiKey || !syncBinId) { alert("먼저 API 키와 데이터함 ID를 연결하세요."); return; }
  setSyncStatus("저장 중...");
  try {
    if (!force) {
      const remoteUpdatedAt = await jsonbinGetUpdatedAtOnly().catch(() => null);
      if (remoteUpdatedAt && syncKnownUpdatedAt && remoteUpdatedAt !== syncKnownUpdatedAt) {
        const overwrite = confirm("다른 사람이 그 사이에 먼저 저장한 것 같습니다.\n\n[확인] = 내 화면 내용으로 덮어쓰기\n[취소] = 먼저 상대방이 저장한 최신 내용을 불러오기");
        if (overwrite) {
          await syncPush(true);
        } else {
          await syncPull();
          setSyncStatus(`최신 내용을 불러왔습니다 — 마지막 저장: ${fmtSyncTime(syncKnownUpdatedAt)} (확인 후 다시 저장하세요)`);
        }
        return;
      }
    }
    const newUpdatedAt = new Date().toISOString();
    await jsonbinPut({ updatedAt: newUpdatedAt, state });
    syncKnownUpdatedAt = newUpdatedAt;
    showSyncBanner(false);
    setSyncStatus(`저장 완료 — ${fmtSyncTime(syncKnownUpdatedAt)}`);
  } catch (err) {
    setSyncStatus("저장 실패: " + syncFriendlyError(err));
  }
}

document.getElementById("syncConnectBtn").addEventListener("click", () => syncConnect(false));
document.getElementById("syncCreateBinBtn").addEventListener("click", () => syncCreateBin());
document.getElementById("syncPullBtn").addEventListener("click", () => syncPull());
document.getElementById("syncPushBtn").addEventListener("click", () => syncPush(false));
const syncDisconnectBtnEl = document.getElementById("syncDisconnectBtn");
if (syncDisconnectBtnEl) syncDisconnectBtnEl.addEventListener("click", () => {
  if (confirm("이 데이터함과의 연결을 해제할까요? (저장된 데이터 자체는 jsonbin.io에 그대로 남아있고, 다시 API 키/ID를 입력하면 재연결할 수 있어요)")) clearSyncConnection();
});
document.getElementById("syncBannerPullBtn").addEventListener("click", () => syncPull());
document.getElementById("syncCopyLinkBtn").addEventListener("click", () => {
  if (!syncApiKey || !syncBinId) { alert("먼저 API 키와 데이터함 ID를 연결하세요."); return; }
  const base = location.href.split("?")[0];
  const link = base + "?syncKey=" + encodeURIComponent(syncApiKey) + "&syncBin=" + encodeURIComponent(syncBinId);
  const notice = "공유 링크가 준비되었습니다. 이 HTML 파일을 웹에 올려서 연 경우에만 다른 사람이 열 수 있는 링크입니다\n(내 컴퓨터의 로컬 파일 경로로 열었다면, 그 경로는 나만 접근할 수 있어 다른 사람은 열 수 없어요).\n이 링크에는 API 키가 그대로 담기니, 신뢰할 수 있는 사람에게만 전달하세요.";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(link).then(
      () => alert(notice + "\n\n(클립보드에 복사됨)"),
      () => prompt(notice + "\n\n아래 링크를 복사하세요:", link)
    );
  } else {
    prompt(notice + "\n\n아래 링크를 복사하세요:", link);
  }
});

/* 공유 링크(?syncKey=...&syncBin=...)로 열었다면 자동으로 연결하고 최신 데이터를 불러온다.
   그런 링크가 아니면(=평소처럼 그냥 주소만으로 새로고침한 경우) 저장해둔 연결 정보로
   자동 재연결을 시도한다(tryAutoReconnectSync). */
function initSyncFromUrl() {
  const params = new URLSearchParams(location.search);
  const keyParam = params.get("syncKey");
  const binParam = params.get("syncBin");
  if (!keyParam || !binParam) { tryAutoReconnectSync(); return; }
  const apiKey = decodeURIComponent(keyParam);
  const binId = decodeURIComponent(binParam);
  document.getElementById("syncApiKeyInput").value = apiKey;
  document.getElementById("syncBinIdInput").value = binId;
  syncApiKey = apiKey;
  syncBinId = binId;
  syncPull().then(startSyncPolling);
  saveSyncConnection();
}

/* ============ auto-save hook ============
   위쪽 render* 함수들은 사용자가 뭔가 바꿀 때마다(스태프 추가, 출석 칠하기, 금액 수정 등)
   호출되므로, 여기서 한 번만 감싸두면 renderAll()을 거치든 개별 render*()만 호출되는
   경로(드래그로 출석 칠하기 등)든 빠짐없이 자동 저장이 걸린다. */
function withAutoSave(fn) {
  return function (...args) {
    const result = fn.apply(this, args);
    scheduleAutoSave();
    return result;
  };
}
renderEventSelect = withAutoSave(renderEventSelect);
renderRolesTable = withAutoSave(renderRolesTable);
renderStaffRoleOptions = withAutoSave(renderStaffRoleOptions);
renderDatesTable = withAutoSave(renderDatesTable);
renderAttTable = withAutoSave(renderAttTable);
renderOtDetailTab = withAutoSave(renderOtDetailTab);
renderResults = withAutoSave(renderResults);

/* ============ master render ============ */
function renderAll() {
  currentResultMonth = ""; // reset month filter whenever the active event / dataset changes wholesale
  renderEventSelect();
  renderRolesTable();
  renderStaffRoleOptions();
  renderDatesTable();
  renderAttTable();
  renderOtDetailTab();
  renderResults();
}
renderAll();
initSyncFromUrl();
