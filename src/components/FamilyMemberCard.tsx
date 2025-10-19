import { useState } from "react";
import { supabase } from "../lib/supabase";

type Guest = {
  id: number;
  first_name: string;
  last_name: string;
  family_group_id: number;
  invited_to: string;                 // "vin_honneur,repas,brunch"
  status_vin_honneur: string | null; // "present" | "absent" | "pending" | null
  status_repas: string | null;
  status_brunch: string | null;
};

type RSVPEvent = "vin_honneur" | "repas" | "brunch";
type Status = "present" | "absent";

const EVENTS: { key: RSVPEvent; label: string; column: keyof Guest }[] = [
  { key: "vin_honneur", label: "Vin d'honneur", column: "status_vin_honneur" },
  { key: "repas",        label: "Repas",         column: "status_repas" },
  { key: "brunch",       label: "Brunch",        column: "status_brunch" },
];

function isInvited(invited_to: string | null | undefined, ev: RSVPEvent) {
  if (!invited_to) return false;
  return invited_to.split(",").map(s => s.trim()).includes(ev);
}

export default function FamilyMemberCard({ guest }: { guest: Guest }) {
  const [local, setLocal] = useState<Guest>(guest);
  const [saving, setSaving] = useState<null | RSVPEvent>(null);

  async function setStatus(ev: RSVPEvent, status: Status) {
    const column =
      ev === "vin_honneur" ? "status_vin_honneur" :
      ev === "repas"        ? "status_repas"      : "status_brunch";

    // UI optimiste
    setLocal(prev => ({ ...prev, [column]: status }));
    setSaving(ev);

    const { error } = await supabase
      .from("guests")
      .update({ [column]: status })
      .eq("id", guest.id);

    setSaving(null);
    if (error) {
      // rollback
      setLocal(guest);
      alert("Oups, impossible d'enregistrer. Réessaie.");
      console.error(error);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="font-medium mb-3">{local.first_name} {local.last_name}</div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {EVENTS.map(({ key, label, column }) =>
          isInvited(local.invited_to, key) ? (
            <div key={key} className="flex items-center justify-between gap-3 border rounded-lg p-2">
              <span>{label}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setStatus(key, "present")}
                  disabled={saving === key}
                  className={`px-3 py-1 rounded-md border ${
                    local[column] === "present" ? "bg-green-600 text-white" : "bg-white"
                  } disabled:opacity-50`}
                >
                  Présent
                </button>
                <button
                  onClick={() => setStatus(key, "absent")}
                  disabled={saving === key}
                  className={`px-3 py-1 rounded-md border ${
                    local[column] === "absent" ? "bg-red-600 text-white" : "bg-white"
                  } disabled:opacity-50`}
                >
                  Absent
                </button>
              </div>
            </div>
          ) : (
            <div key={key} className="opacity-40 border-dashed border rounded-lg p-2">
              {label} • non invité
            </div>
          )
        )}
      </div>
    </div>
  );
}
